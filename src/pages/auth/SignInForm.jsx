import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { signIn } from '@/lib/api'
import { validateEmail } from '@/lib/validations'
import { getErrorMessage } from '@/lib/helpers'
import { toast } from 'sonner'
import s from './AuthForm.module.scss'

import TextField from '@/components/ui/text-field'
import Button from './Button'

export default function SignInForm(props) {
  const { swapForm } = props

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  async function onSignIn(event) {
    event.preventDefault()

    // try to validate user's email
    try {
      validateEmail.parse(emailAddress)
    } catch (error) {
      const [parsedError] = JSON.parse(error)
      toast.error(parsedError.message)
      return
    }

    // try to sign in
    try {
      setSubmitting(true)
      await signIn({ email: emailAddress, password })

      // route to manager on success.
      navigate('/')
    } catch (error) {
      console.log(error)

      const message = getErrorMessage(error)
      toast.error(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSignIn} className={s.form}>
      <div className={s.main}>
        <TextField
          onChange={(value) => setEmailAddress(value)}
          label="Email Address"
          placeholder="user@kanban.com"
          type="email"
          value={emailAddress}
        />
        <TextField
          onChange={(value) => setPassword(value)}
          label="Password"
          placeholder="1234#85"
          type="password"
          value={password}
        />
        <Button className={s.submit} disabled={submitting}>
          {!submitting ? 'Login' : 'Logging in...'}
        </Button>
      </div>
      <div className={s.others}>
        <Link to="#" className={s.recover}>
          Recover Password?
        </Link>
        <button
          type="button"
          onClick={swapForm}
          className={s.swap}
        >
          Or Sign up
        </button>
      </div>
    </form>
  )
}
