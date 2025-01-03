import s from './Button.module.scss'
import clsx from 'clsx'

export default function Button({
  children,
  className,
  ...otherProps
}) {
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
