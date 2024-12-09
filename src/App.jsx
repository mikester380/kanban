import { BrowserRouter, Routes, Route } from 'react-router'

import Login from './pages/login'
import Signup from './pages/signup'
import Kanban from './pages/kanban'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Kanban />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
      </Routes>
    </BrowserRouter>
  )
}
