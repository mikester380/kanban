import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { api } from '@/lib/api'

export default function useNoAuthRoute() {
  const navigate = useNavigate()

  useEffect(() => {
    api.auth.getSession().then((res) => {
      if (res.error) {
        console.log(res.error)
        return
      }

      const { session } = res.data

      if (session) {
        navigate('/')
      }
    })
  }, [])
}
