import { useState } from 'react'
import s from './SignInForm.module.scss'

import TextField from '@/components/ui/text-field'
import Button from './Button'

export default function SignInForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { swapForm } = props

  async function onSignIn(event) {
    event.preventDefault()

    setLoading(true)
  }

  return (
    <form onSubmit={onSignIn} className={s.form}>
      <div className={s.main_form}>
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
        <Button>
          {!loading && 'Login'}
          {loading && 'Logging In...'}
        </Button>
      </div>
      <div className={s.others}>
        <a href="#" className={s.recover}>
          Recover Password?
        </a>
        <button onClick={swapForm} className={s.swap}>
          ...Or Sign up
        </button>
      </div>
    </form>
  )
}
