import { Route, Routes } from 'react-router-dom';
import Auth from './componets/Auth';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/login';
import User from './pages/User';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <Auth>
              <User />
            </Auth>
          }
        />
        <Route
          path="/admin"
          element={
            <Auth>
              <Admin />
            </Auth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
