import { createClient } from '@/lib/supabase'

export interface AuthError {
  message: string
  field?: string
}

export interface SignUpData {
  email: string
  password: string
  name: string
  role?: 'student' | 'instructor'
}

export interface SignInData {
  email: string
  password: string
}

// Client-side authentication functions
export async function signUp({ email, password, name, role = 'student' }: SignUpData) {
  const supabase = createClient()
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role,
        }
      }
    })

    if (error) {
      return { user: null, error: { message: error.message } }
    }

    // Create user profile in database
    if (data.user) {
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          email: data.user.email!,
          name,
          role,
        })

      if (profileError) {
        console.error('Profile creation error:', profileError)
        // Note: User is still created in auth, but profile creation failed
      }
    }

    return { user: data.user, error: null }
  } catch (error) {
    return { 
      user: null, 
      error: { message: 'An unexpected error occurred' } 
    }
  }
}

export async function signIn({ email, password }: SignInData) {
  const supabase = createClient()
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { user: null, error: { message: error.message } }
    }

    return { user: data.user, error: null }
  } catch (error) {
    return { 
      user: null, 
      error: { message: 'An unexpected error occurred' } 
    }
  }
}

export async function signOut() {
  const supabase = createClient()
  
  try {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      return { error: { message: error.message } }
    }

    return { error: null }
  } catch (error) {
    return { error: { message: 'An unexpected error occurred' } }
  }
}

export async function getCurrentUser() {
  const supabase = createClient()
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      return { user: null, error: { message: error.message } }
    }

    return { user, error: null }
  } catch (error) {
    return { 
      user: null, 
      error: { message: 'An unexpected error occurred' } 
    }
  }
} 