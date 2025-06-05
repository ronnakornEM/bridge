import { createClient } from "@/lib/supabase/client";


interface SignUpData {
  email: string
  password: string
  name: string
  role?: 'student' | 'instructor'
}

export async function signUp({ email, password, name, role = 'student' }: SignUpData){
  const supabase = createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    throw error
  }
  
  const {data: profileData, error: profileError } = await supabase.from("users").insert({
    id: data?.user?.id,
    email: email,
    name: name,
    role:role,
  }).select();

  if (profileError) {
    throw profileError
  }

  return { data: profileData, error: profileError }
}
