import { useRef } from 'react'
import { signUp } from '@/lib/api'

export default function SignInForm(props) {
  const email = useRef()
  const password = useRef()
  const confirmedPassword = useRef()
  const { swapForm } = props

  async function onSignUp() {}

  return <form></form>
}
