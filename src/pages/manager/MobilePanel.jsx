import * as dialog from '@radix-ui/react-dialog'
import s from './MobilePanel.module.scss'

function MobilePanel({}) {
  return (
    <dialog.Root open={true}>
      <dialog.Portal>
        <dialog.Overlay className={s.overlay} />
        {/* <dialog.Content className={s.panel}>
          <dialog.Title>Panel</dialog.Title>
        </dialog.Content> */}
      </dialog.Portal>
    </dialog.Root>
  )
}

export default MobilePanel
