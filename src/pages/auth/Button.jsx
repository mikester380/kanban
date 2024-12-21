import s from './Button.module.scss'

export default function Button(props) {
  const { children, loading, loadingMessage } = props

  return (
    <button type="submit" className={s.button}>
      {!loading && children}
      {loading && loadingMessage}
    </button>
  )
}
