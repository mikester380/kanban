import * as rswitch from '@radix-ui/react-switch'
import s from './ThemeSwitcher.module.scss'
import Sun from '@/components/vectors/Sun'
import Moon from '@/components/vectors/Moon'

function ThemeSwitcher() {
  return (
    <div className={s.switcher}>
      <Sun />
      <rswitch.Root className={s.switch}>
        <rswitch.Thumb className={s.thumb} />
      </rswitch.Root>
      <Moon />
    </div>
  )
}

export default ThemeSwitcher
