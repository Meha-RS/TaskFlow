import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/" style={{ color: '#007bff' }}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;