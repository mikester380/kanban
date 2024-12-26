import { createClient } from '@supabase/supabase-js'

// setup supabase client
const api = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

async function createNewUser(user) {
  const res = await api.auth.signUp(user)

  if (res.error) {
    throw res.error
  }
}

export { api, createNewUser }
