import { useState } from 'react'
import useNoAuthRoute from '@/hooks/useNoAuthRoute'
import s from './Auth.module.scss'

import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const copy = {
  login: {
    title: 'Login',
    sum: 'Log back in and pick up right where you left off.',
  },
  signup: {
    title: 'Signup',
    sum: 'Create an account with us and start managing tasks easily!',
  },
}

export default function Auth() {
  const [newUser, setNewUser] = useState(false)
  useNoAuthRoute()

  const formTitle = newUser
    ? copy.signup.title
    : copy.login.title

  const formSummary = newUser
    ? copy.signup.sum
    : copy.login.sum

  function swapForm() {
    setNewUser(!newUser)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.inner_wrapper}>
        <div className={s.shelf}>
          <img src="/images/logo.png" aria-hidden="true" />
        </div>
        <header className={s.copy}>
          <h1>{formTitle}</h1>
          <p>{formSummary}</p>
        </header>
        {!newUser && <SignInForm swapForm={swapForm} />}
        {newUser && <SignUpForm swapForm={swapForm} />}
      </div>
    </div>
  )
}
