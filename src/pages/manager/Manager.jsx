import { useState } from 'react'
import useAuthRoute from '@/hooks/useAuthRoute'
import s from './Manager.module.scss'

import WorkStation from './WorkStation'
import Panel from './Panel'

export default function Manager() {
  const [panelIsActive, setPanelIsActive] = useState(false)
  useAuthRoute()

  return (
    <div className={s.page}>
      {panelIsActive && <Panel />}

      {/* TODO: it's possible to convert this to a memo 
      component for performance. */}
      <WorkStation
        panelIsActive={panelIsActive}
        togglePanelActive={() => {
          setPanelIsActive(!panelIsActive)
        }}
      />
    </div>
  )
}
