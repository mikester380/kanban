import { BrowserRouter, Routes, Route } from 'react-router'
import Sonner from '@/components/ui/sonner'

import Auth from './pages/auth'
import Manager from './pages/manager'

export default function App() {
  return (
    <>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Manager />} path="/" />
          <Route element={<Auth />} path="/auth" />
        </Routes>
      </BrowserRouter>
    </>
  )
}
