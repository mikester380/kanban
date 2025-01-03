import { memo } from 'react'
import s from './WorkStation.module.scss'
import Header from './Header'

function WorkStation({ panelIsActive, togglePanelActive }) {
  return (
    <div className={s.wrap}>
      <Header
        panelIsActive={panelIsActive}
        togglePanelActive={togglePanelActive}
      />
    </div>
  )
}

export default memo(WorkStation)
