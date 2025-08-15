// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Supabase URL & Anon Key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create and export the client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
