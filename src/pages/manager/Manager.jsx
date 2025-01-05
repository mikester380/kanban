import { useState } from 'react'
import useAuthRoute from '@/hooks/useAuthRoute'
import s from './Manager.module.scss'

import WorkStation from './WorkStation'
import Panel from './Panel'

export default function Manager() {
  const [panelActive, setPanelActive] = useState(false)
  useAuthRoute()

  return (
    <div className={s.page}>
      <Panel
        panelActive={panelActive}
        setPanelActive={setPanelActive}
      />
      <WorkStation
        panelActive={panelActive}
        setPanelActive={setPanelActive}
      />
    </div>
  )
}
