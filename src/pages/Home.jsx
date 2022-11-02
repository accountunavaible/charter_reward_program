import { Link } from 'react-router-dom';
import '../asset/styles/home.css';

export default function Home() {
  return (
    <div className="home">
      <h1>
        Hello Welcome to Rewards program developed by <span style={{ color: 'red' }}>lewis zhu</span>
      </h1>
      <h2>tech used</h2>
      <ul>
        <li>client: react, react-router-dom</li>
        <li>server: express, cors, and mock data</li>
      </ul>
      <h2>description</h2>
      <ul>
        <li>pages are divided into login, user, admin</li>
        <li>the page will be display based on role</li>
        <li>the user data is store in the memory so dont refresh the page, just for quick skills display</li>
        <li>users or admin must login to view</li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li>/ -- home index page</li>
        <li>/login -- login page</li>
        <li>/user -- user page</li>
        <li>/admin -- admin page</li>
      </ul>
      <h2>default password</h2>
      <ul>
        <li>admin, 123456</li>
        <li>user1, 123456</li>
        <li>user2, 123456</li>
      </ul>
      <div
        style={{
          textAlign: 'center',
          marginTop: '2rem'
        }}
      >
        <h2>You can login below</h2>
        <Link to="/login" className="home_Link">
          Take Me To Log In
        </Link>
      </div>
    </div>
  );
}
