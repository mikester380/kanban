import s from './Button.module.scss'

export default function Button(props) {
  const { children } = props

  return (
    <button type="submit" className={s.button}>
      {children}
    </button>
  )
}
