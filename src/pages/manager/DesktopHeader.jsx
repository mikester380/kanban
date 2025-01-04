import s from './DesktopHeader.module.scss'
import clsx from 'clsx'

import FullLogo from '@/components/vectors/FullLogo'
import NativeButton from '@/components/ui/native-button'
import OptionsToggle from './OptionsToggle'

function DesktopHeader({ logoIsHidden }) {
  return (
    <div className={clsx(s.header, 'on-tablet-up')}>
      {!logoIsHidden && (
        <div className={s.logo}>
          <FullLogo />
        </div>
      )}
      <div className={s.content}>
        <div className={s.left_content}>
          <div className={s.active_board}>
            {'Platform Launch'}
          </div>
        </div>
        <div className={s.right_content}>
          <NativeButton
            size="2"
            stretched={false}
            disabled={true}
          >
            + Add a New Task
          </NativeButton>
          <OptionsToggle />
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader
