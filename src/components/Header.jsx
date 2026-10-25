import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <h1>TaskFlow</h1>
      
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#aaa', textDecoration: 'none' })}>
          Доска
        </NavLink>
        <NavLink to="/stats" style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#aaa', textDecoration: 'none' })}>
          Статистика
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;