import s from './PanelTrigger.module.scss'
import clsx from 'clsx'
import CroppedButton from '@/components/ui/cropped-button'
import Eye from '@/components/vectors/Eye'

function PanelTrigger({ showPanel }) {
  return (
    <CroppedButton
      className={clsx(s.trigger, 'on-tablet-up')}
      icon={<Eye />}
      type="primary"
      onClick={showPanel}
    />
  )
}

export default PanelTrigger
