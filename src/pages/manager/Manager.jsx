import useAuthRoute from '@/hooks/useAuthRoute'

export default function Manager() {
  useAuthRoute()

  return <div>manager</div>
}
