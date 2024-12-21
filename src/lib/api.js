import { createClient } from '@supabase/supabase-js'

// setup supabase client
export const api = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

export async function signup(user) {
  const res = await api.auth.signUp(user)

  if (res.error) {
    throw error
  }
}
