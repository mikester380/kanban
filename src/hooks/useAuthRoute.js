import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { api } from '@/lib/api'

export default function useAuthRoute() {
  const navigate = useNavigate()

  useEffect(() => {
    api.auth.getSession().then((res) => {
      if (res.error) {
        console.log(res.error)
        return
      }

      const { session } = res.data

      if (!session) {
        navigate('/auth')
      }
    })

    const subscription = api.auth.onAuthStateChange(
      (event) => {
        if (event === 'SIGNED_OUT') {
          navigate('/auth')
        }
      }
    ).data.subscription

    return () => subscription.unsubscribe()
  }, [])
}
