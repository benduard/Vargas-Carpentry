import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Provide fallback values if environment variables are not set
const defaultUrl = 'https://placeholder.supabase.co'
const defaultKey = 'placeholder_anon_key'

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not configured. Using placeholder values.')
}

export const supabase = createClient(
  supabaseUrl || defaultUrl,
  supabaseAnonKey || defaultKey
)