import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { api } from '@/lib/api'

export default function useAuthRoute() {
  const navigate = useNavigate()

  useEffect(() => {
    api.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.log(error)
        return
      }

      const { session } = data

      if (!session) {
        navigate('/login')
      }
    })

    const { data: subscription } =
      api.auth.onAuthStateChange((event) => {
        if (event === 'SIGNED_OUT') {
          navigate('/login')
        }
      })

    return () => subscription.unsubscribe()
  }, [])
}
