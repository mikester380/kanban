import { useRef, useEffect } from 'react'

function ReturnFocusButton({
  listeningTo, // the dialog's active state,
  onClick,
  children,
  ...otherProps
}) {
  const watching = useRef(false)
  const button = useRef()

  useEffect(() => {
    const isInactive = !listeningTo

    // check if we're watching a dialog and if the dialog is inactive
    if (watching.current && isInactive) {
      button.current.focus({ focusVisible: true })
      watching.current = false
    }
  }, [listeningTo])

  return (
    <button
      {...otherProps}
      onClick={(event) => {
        if (!watching.current) {
          watching.current = true
        }
        onClick?.(event)
      }}
      ref={button}
    >
      {children}
    </button>
  )
}

export default ReturnFocusButton
