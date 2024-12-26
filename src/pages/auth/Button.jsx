import s from './Button.module.scss'
import clsx from 'clsx'

export default function Button(props) {
  const { children, className, ...otherProps } = props

  return (
    <button
      {...otherProps}
      type="submit"
      className={clsx(className, s.button)}
    >
      {children}
    </button>
  )
}
