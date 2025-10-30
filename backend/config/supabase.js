import { createClient } from '@supabase/supabase-js';

let supabase = null;

// Initialize Supabase client
export const initSupabase = () => {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    console.warn('Supabase credentials not found. Google OAuth will not work.');
    return null;
  }

  supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  return supabase;
};

export const getSupabase = () => {
  if (!supabase) {
    return initSupabase();
  }
  return supabase;
};

export default { initSupabase, getSupabase };
