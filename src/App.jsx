import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux';
import { store } from './store';
import { LoginPage } from './pages/auth/Login';
import { RegisterPage } from './pages/auth/Register';
import { ProtectedLoginRoute } from './pages/protectRoutes/ProtectedLoginRoute';
import Dashboard from './pages/user/Dashboard';
import UserRouter from './pages/user/UserRouter';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedLoginRoute>
                <UserRouter/>
              </ProtectedLoginRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
