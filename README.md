# Bridge the Gap - E-Learning Platform

A modern e-learning platform built with Next.js, Supabase, Mux, and Stripe. Think Udemy, but better.

## 🚀 Features

- **Authentication**: Secure user registration and login with Supabase Auth
- **Course Management**: Create, publish, and manage courses
- **Video Streaming**: High-quality video streaming with Mux
- **Payment Processing**: Secure payments with Stripe
- **User Dashboard**: Track progress and manage enrollments
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Video**: Mux for video streaming and processing
- **Payments**: Stripe for payment processing
- **Styling**: Tailwind CSS + shadcn/ui components
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before getting started, make sure you have:

- Node.js 18+ installed
- A Supabase account and project
- A Mux account
- A Stripe account
- Git installed

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd bridge
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and fill in your API keys:

```bash
cp env.example .env.local
```

Edit `.env.local` with your actual values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Mux Configuration
MUX_TOKEN_ID=your_mux_token_id
MUX_TOKEN_SECRET=your_mux_token_secret
NEXT_PUBLIC_MUX_ENV_KEY=your_mux_env_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App Configuration
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set up Supabase Database

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `database-schema.sql`
4. Run the SQL to create all tables and set up RLS policies

### 5. Configure Supabase Auth

In your Supabase dashboard:

1. Go to Authentication > Settings
2. Add your site URL: `http://localhost:3000`
3. Add redirect URLs:
   - `http://localhost:3000/api/auth/callback`
   - `http://localhost:3000/dashboard`

### 6. Set up Mux

1. Create a Mux account and get your API tokens
2. Set up a webhook endpoint for video processing callbacks
3. Configure your environment variables with Mux credentials

### 7. Set up Stripe

1. Create a Stripe account and get your API keys
2. Set up webhook endpoints in your Stripe dashboard
3. Configure your environment variables with Stripe credentials

### 8. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/                    # Next.js 13+ app router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── login/            # Authentication pages
│   ├── register/         
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── course-card.tsx   # Course display component
│   └── navbar.tsx        # Navigation component
├── lib/                  # Utility functions and configurations
│   ├── auth.ts          # Authentication utilities
│   ├── supabase.ts      # Supabase client configuration
│   ├── stripe.ts        # Stripe configuration
│   ├── mux.ts           # Mux configuration
│   ├── types.ts         # TypeScript type definitions
│   └── utils.ts         # General utilities
```

## 🔐 Authentication Flow

1. **Registration**: Users sign up with email, password, name, and role (student/instructor)
2. **Email Verification**: Supabase sends verification email
3. **Login**: Users sign in with email and password
4. **Dashboard**: Authenticated users are redirected to their dashboard
5. **Profile Management**: Users can update their profiles

## 🎥 Video Management with Mux

- Upload videos directly to Mux
- Automatic transcoding and optimization
- Adaptive streaming for best quality
- Analytics and engagement metrics

## 💳 Payment Processing with Stripe

- Secure payment processing
- Support for one-time course purchases
- Automatic invoice generation
- Webhook handling for payment events

## 🔒 Security Features

- Row Level Security (RLS) with Supabase
- Authentication middleware
- Input validation and sanitization
- CSRF protection
- Environment variable validation

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to update these for production:

- Update `NEXT_PUBLIC_APP_URL` to your production domain
- Use production API keys for all services
- Set up proper webhook endpoints

## 📖 API Documentation

### Authentication Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout
- `GET /api/auth/callback` - OAuth callback handler

### Course Endpoints

- `GET /api/courses` - List all published courses
- `POST /api/courses` - Create a new course (instructors only)
- `GET /api/courses/[id]` - Get course details
- `PUT /api/courses/[id]` - Update course (instructor only)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have any questions or need help:

1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information
4. Join our Discord community

## 🎯 Roadmap

- [ ] Advanced course analytics
- [ ] Live streaming capabilities
- [ ] Mobile app development
- [ ] AI-powered course recommendations
- [ ] Multilingual support
- [ ] Certificate generation
- [ ] Discussion forums
- [ ] Assignment and quizzes

---

Happy learning! 🎓
