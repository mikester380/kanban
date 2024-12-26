import { Toaster } from 'sonner'
import s from './Sonner.module.scss'

export default function Sonner(props) {
  return (
    <Toaster
      {...props}
      toastOptions={{
        classNames: {
          toast: s.toast,
        },
      }}
    />
  )
}
