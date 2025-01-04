import s from './MobileHeader.module.scss'
import clsx from 'clsx'

import Logo from '@/components/vectors/Logo'
import ArrowStatus from '@/components/vectors/ArrowStatus'
import Plus from '@/components/vectors/Plus'
import OptionsToggle from './OptionsToggle'
import NativeButton from '@/components/ui/native-button'
import ReturnFocusButton from '@/components/return-focus-button'

function MobileHeader({
  panelIsActive,
  togglePanelActive,
}) {
  return (
    <div className={clsx(s.header, 'on-mobile')}>
      <div className={s.left}>
        <Logo />
        <ReturnFocusButton
          listeningTo={panelIsActive}
          onClick={togglePanelActive}
          className={s.toggle}
        >
          {'Platform Launch'}
          <ArrowStatus active={panelIsActive} />
        </ReturnFocusButton>
      </div>
      <div className={s.right}>
        <NativeButton stretched={false} disabled={true}>
          <Plus />
        </NativeButton>
        <OptionsToggle />
      </div>
    </div>
  )
}

export default MobileHeader
