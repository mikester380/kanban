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
    if (watching && isInactive) {
      button.current.focus()
      watching.current = false
    }
  }, [listeningTo])

  return (
    <button
      {...otherProps}
      onClick={() => {
        if (!watching) {
          watching.current = true
        }
        onClick?.()
      }}
      ref={button}
    >
      {children}
    </button>
  )
}

export default ReturnFocusButton
