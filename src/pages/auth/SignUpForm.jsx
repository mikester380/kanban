import { useState } from 'react'
import { signup } from '@/lib/api'
import s from './AuthForm.module.scss'

import TextField from '@/components/ui/text-field'
import Button from './Button'

export default function SignUpForm(props) {
  const { swapForm } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function onSignup(event) {
    event.preventDefault()

    setSubmitting(true)
  }

  return (
    <form onSubmit={onSignup} className={s.form}>
      <div className={s.main}>
        <TextField
          onChange={(value) => setEmail(value)}
          label="Email Address"
          placeholder="user@kanban.com"
          type="email"
          value={email}
        />
        <TextField
          onChange={(value) => setPassword(value)}
          label="Password"
          placeholder="1234#85"
          type="password"
          value={password}
        />
        <TextField
          onChange={(value) => setConfirmPassword(value)}
          label="Confirm Password"
          placeholder="1234#85"
          type="password"
          value={confirmPassword}
        />
        <Button className={s.submit}>
          {!submitting && 'Sign up'}
          {submitting && 'Creating...'}
        </Button>
      </div>
      <div className={s.others}>
        <button onClick={swapForm} className={s.swap}>
          Or Login
        </button>
      </div>
    </form>
  )
}
