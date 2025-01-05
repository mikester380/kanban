import * as dialog from '@radix-ui/react-dialog'
import s from './MobilePanel.module.scss'

function MobilePanel({ panelActive, setPanelActive }) {
  return (
    <dialog.Root
      open={panelActive}
      onOpenChange={setPanelActive}
      modal={false}
    >
      <dialog.Portal>
        <div className={s.overlay}></div>
        <dialog.Content
          onInteractOutside={(event) => {
            /* encountered this weird bug where clicking on the trigger
            button also fires the onOpenChange handler. turns out the handler
            fires when we click anywhere in the viewport. when we try to close the
            modal by clicking the trigger, onOpenChange closes it and our trigger
            button reopens it almost immediately which is not what we want.
            
            this fixes it for now until I come up with a better solution*/

            event.preventDefault()

            const { target } = event
            const overlayWasClicked =
              target.classList.contains(s.overlay)

            if (overlayWasClicked) {
              setPanelActive(false)
            }
          }}
        >
          <dialog.Title className="visually-hidden">
            Panel
          </dialog.Title>
          <dialog.Description className="visually-hidden">
            select a board to work on or create new boards
          </dialog.Description>
          <div className={s.panel}>
            <div className={s.all_boards}>
              <h2 className={s.title}>all boards (3)</h2>
              <ul className={s.boards}></ul>
            </div>
          </div>
        </dialog.Content>
      </dialog.Portal>
    </dialog.Root>
  )
}

export default MobilePanel
