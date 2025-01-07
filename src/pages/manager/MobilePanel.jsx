import * as dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import s from './MobilePanel.module.scss'
import { NavLink } from 'react-router'
import BoardIcon from '@/components/vectors/BoardIcon'

const boards = [
  {
    path: 'boards/1',
    title: 'Platform Launch',
  },
  {
    path: 'boards/2',
    title: 'Marketing Plan',
  },
  {
    path: 'boards/3',
    title: 'Roadmap',
  },
]

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
            <div className={s.main}>
              <h2 className={s.title}>all boards (3)</h2>
              <ul className={s.boards}>
                {boards.map((board, index) => (
                  <li key={index}>
                    <NavLink
                      to={board.path}
                      className={({ isActive }) =>
                        clsx(s.link, isActive && s.active)
                      }
                      onClick={() => setPanelActive(false)}
                    >
                      <span className={s.link_inner}>
                        <BoardIcon />
                        <span>{board.title}</span>
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button className={s.create}>
                <BoardIcon />
                <span>+ Create New Board</span>
              </button>
            </div>
          </div>
        </dialog.Content>
      </dialog.Portal>
    </dialog.Root>
  )
}

export default MobilePanel
