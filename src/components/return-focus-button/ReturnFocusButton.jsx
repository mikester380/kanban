import { useState, useEffect, useRef } from 'react'

function ReturnFocusButton({
  listeningTo, // the dialog's active state,
  onClick,
  children,
  ...otherProps
}) {
  const watching = useRef(false)
  const button = useRef()

  const isInactive = !listeningTo

  // check if we're watching a dialog and if the dialog is inactive
  if (watching.current && isInactive) {
    button.current.blur()
    watching.current = false
  }

  return (
    <button
      {...otherProps}
      onClick={() => {
        if (!watching.current) {
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
