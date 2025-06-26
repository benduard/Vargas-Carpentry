import { createClient } from '@supabase/supabase-js';

// Use environment variables with fallback values for automatic deployment
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gfdkfwdnlwapniehgytp.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZGtmd2RubHdhcG5pZWhneXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzkyMzksImV4cCI6MjA2NDExNTIzOX0.CFMuHlCPB_duFJxJBGRFXQ1uQKVujs5t-MIDBRxkuXE';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);