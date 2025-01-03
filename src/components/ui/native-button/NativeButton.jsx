import { forwardRef } from 'react'
import clsx from 'clsx'
import s from './NativeButton.module.scss'

const sizes = {
  1: 'small',
  2: 'large',
}

const NativeButton = forwardRef((props, ref) => {
  const {
    stretched = true,
    type = 'primary',
    className,
    children,
    size = 1,
    ...otherProps
  } = props

  return (
    <button
      ref={ref}
      className={clsx(
        className,
        s.button,
        s[type],
        s[sizes[size]],
        stretched && s.stretched
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
})

export default NativeButton
