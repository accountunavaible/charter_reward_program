import { useState } from 'react';
import '../asset/styles/login.css';
import memoryUtil from '../utils/memory.util';
import { useNavigate } from 'react-router-dom';
import LogIn from '../api/login.api';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleNavigationToHome = () => {
    navigate('/');
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return alert('you must enter your password and username to login');
    }
    const res = await LogIn(formData);
    if (res.code === 1) {
      return alert('password or username wrong');
    }

    memoryUtil.storeUser(res.user);
    if (res.user.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  };
  return (
    <div className="login">
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <span style={{ fontSize: '2rem' }}>username</span>
        <input
          type="text"
          placeholder="enter your username"
          value={formData.username}
          onChange={e => setFormData({ ...formData, username: e.target.value })}
        />
        <span style={{ fontSize: '2rem' }}>password</span>
        <input
          type="password"
          placeholder="enter your password"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">LogIn</button>
      </form>
      <span onClick={handleNavigationToHome}>Take Me To Home</span>
    </div>
  );
}
