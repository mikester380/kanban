import s from './OptionsToggle.module.scss'
import Options from '@/components/vectors/Options'

function OptionsToggle(props) {
  return (
    <button {...props} className={s.toggle}>
      <Options />
    </button>
  )
}

export default OptionsToggle
