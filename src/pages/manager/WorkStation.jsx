import { memo } from 'react'
import s from './WorkStation.module.scss'
import Header from './Header'

function WorkStation({ panelActive, setPanelActive }) {
  return (
    <div className={s.workstation}>
      <Header
        panelActive={panelActive}
        setPanelActive={setPanelActive}
      />
    </div>
  )
}

export default memo(WorkStation)
