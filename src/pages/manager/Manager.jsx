import { useState } from 'react'
import useAuthRoute from '@/hooks/useAuthRoute'
import s from './Manager.module.scss'

import Display from './Display'
import Panel from './Panel'

export default function Manager() {
  const [panelIsActive, setPanelIsActive] = useState(false)
  useAuthRoute()

  return (
    <div className={s.page}>
      {panelIsActive && <Panel />}

      {/* TODO: it's possible convert this to a memo 
      component for performance. */}
      <Display
        panelSwitch={() => {
          setPanelIsActive(!panelIsActive)
        }}
      />
    </div>
  )
}
