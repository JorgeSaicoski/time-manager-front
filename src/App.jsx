import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux';
import { store } from './store';
import { LoginPage } from './pages/auth/Login';
import { RegisterPage } from './pages/auth/Register';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
