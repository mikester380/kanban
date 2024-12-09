import { api } from '@/lib/api'
import { useNavigate } from 'react-router'

export default function AuthOnly(props) {
  const navigate = useNavigate()
  const { children } = props

  const authenticated = api.getSession()

  if (!authenticated) {
    navigate('/login')
  }

  return children
}
