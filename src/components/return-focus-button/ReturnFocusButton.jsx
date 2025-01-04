import { useState, useEffect, useRef } from 'react'

function ReturnFocusButton({
  listeningTo, // the dialog's active state,
  onClick,
  children,
  ...otherProps
}) {
  const [watching, setWatching] = useState(false)
  const button = useRef()
  useEffect(() => {
    const isInactive = !listeningTo

    // check if we're watching a dialog and if the dialog is inactive
    if (watching && isInactive) {
      button.current.focus()
      setWatching(false)
    }
  }, [listeningTo, watching])

  return (
    <button
      {...otherProps}
      onClick={() => {
        setWatching(true)
        onClick?.()
      }}
      ref={button}
    >
      {children}
    </button>
  )
}

export default ReturnFocusButton
