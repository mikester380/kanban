import { createClient } from '@supabase/supabase-js'

// setup supabase client
export const api = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)
