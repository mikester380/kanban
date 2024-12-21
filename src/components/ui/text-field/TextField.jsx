import { forwardRef, useState } from 'react'
import s from './TextField.module.scss'
import clsx from 'clsx'

const TextField = forwardRef((props, ref) => {
  const [hasError, setHasError] = useState(false)
  const {
    required = false,
    onChange,
    className,
    label,
    ...otherProps
  } = props

  return (
    <label className={clsx(className, s.field)}>
      <span className={s.label}>{label}</span>
      <div className={s.input_field}>
        <input
          ref={ref}
          onChange={({ target: { value } }) => {
            if (required) {
              if (!value) setHasError(true)
              else setHasError(false)
            }

            // update input state
            onChange?.(value)
          }}
          className={clsx(hasError && s.error)}
          // required={required}

          // this input maybe controlled, so the "value" prop is being applied here
          {...otherProps}
        />
        {hasError && (
          <span className={s.error_message}>
            Can't be empty
          </span>
        )}
      </div>
    </label>
  )
})

export default TextField
