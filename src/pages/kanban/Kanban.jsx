import AuthOnly from '@/components/auth-only'

function Page() {}

export default function Kanban() {
  return <AuthOnly children={<Page />} />
}
