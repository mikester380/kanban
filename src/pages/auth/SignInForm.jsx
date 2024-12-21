import { useRef } from 'react'

export default function SignInForm(props) {
  const email = useRef()
  const password = useRef()
  const { swapForm } = props

  async function onSignIn() {}

  return <form></form>
}
