import { createClient } from '@supabase/supabase-js'

// setup supabase client
const api = createClient(
  import.meta.VITE_SUPABASE_URL,
  import.meta.VITE_SUPABASE_KEY
)
