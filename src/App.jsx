import { BrowserRouter, Routes, Route } from 'react-router'

import Manager from './pages/manager'
import Signup from './pages/signup'
import Login from './pages/login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Manager />}
          path="/"
        />
        <Route
          element={<Login />}
          path="/login"
        />
        <Route
          element={<Signup />}
          path="/signup"
        />
      </Routes>
    </BrowserRouter>
  )
}
