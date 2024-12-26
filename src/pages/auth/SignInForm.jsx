import { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'
import s from './AuthForm.module.scss'

import TextField from '@/components/ui/text-field'
import Button from './Button'

export default function SignInForm(props) {
  const { swapForm } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function onSignIn(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSignIn} className={s.form}>
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
        <Button className={s.submit} disabled={submitting}>
          {!submitting && 'Login'}
          {submitting && 'Logging In...'}
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
