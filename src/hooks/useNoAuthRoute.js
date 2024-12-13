import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { api } from '@/lib/api'

export default function useNoAuthRoute() {
  const navigate = useNavigate()

  useEffect(() => {
    api.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.log(error)
        return
      }

      const { session } = data

      if (session) {
        navigate('/')
      }
    })
  }, [])
}
