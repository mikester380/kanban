import { useState } from 'react'
import { validateNewUser } from '@/lib/validations'
import { createNewUser } from '@/lib/api'
import { getErrorMessage } from '@/lib/helpers'
import { toast } from 'sonner'

import s from './AuthForm.module.scss'

import TextField from '@/components/ui/text-field'
import Button from './Button'

export default function SignUpForm({ swapForm }) {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function onSignUp(event) {
    event.preventDefault()

    // try to validate user's data
    try {
      validateNewUser.parse({
        emailAddress,
        password,
        confirm,
      })
    } catch (error) {
      const [parsedError] = JSON.parse(error)
      toast.error(parsedError.message)
      return
    }

    // try to create a new user
    try {
      setSubmitting(true)
      await createNewUser({ email: emailAddress, password })
      toast.success(
        "You're in! Check your email for a link to verify your account.",
        { duration: Infinity }
      )
    } catch (error) {
      const message = getErrorMessage(error)
      toast.error(message)

      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSignUp} className={s.form}>
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
        <TextField
          onChange={(value) => setConfirm(value)}
          label="Confirm Password"
          placeholder="1234#85"
          type="password"
          value={confirm}
        />
        <Button className={s.submit} disabled={submitting}>
          {!submitting ? 'Sign Up' : 'Creating...'}
        </Button>
      </div>
      <div className={s.others}>
        <button
          type="button"
          onClick={swapForm}
          className={s.swap}
        >
          Or Login
        </button>
      </div>
    </form>
  )
}
