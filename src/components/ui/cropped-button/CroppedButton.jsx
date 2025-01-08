import { forwardRef } from 'react'
import s from './CroppedButton.module.scss'
import clsx from 'clsx'

const CroppedButton = forwardRef(
  (
    {
      children,
      className,
      type,
      icon,
      text,
      ...otherProps
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          className,
          s.button,
          s[type],
          text && s.text
        )}
        {...otherProps}
      >
        {icon}
        {text}
      </button>
    )
  }
)

export default CroppedButton
