import { forwardRef, useState } from 'react'
import s from './TextField.module.scss'
import clsx from 'clsx'

const TextField = forwardRef((props, ref) => {
  const {
    label,
    onChange,
    required = false,
    className,
    ...otherProps
  } = props
  const [hasError, setHasError] = useState(false)

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

          // this input is controlled, so the "value" prop is being applied here
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
