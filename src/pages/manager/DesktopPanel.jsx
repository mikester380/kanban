import s from './DesktopPanel.module.scss'
import clsx from 'clsx'
import FullLogo from '@/components/vectors/FullLogo'

function DesktopPanel({}) {
  return (
    <aside className={clsx(s.panel, 'on-tablet-up')}>
      <div className={s.logo}>
        <FullLogo />
      </div>
    </aside>
  )
}

export default DesktopPanel
