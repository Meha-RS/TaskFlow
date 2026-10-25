import { useStore } from '@store/useStore';

function StatsPage() {
  const tasks = useStore((state) => state.tasks);

  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;
  const todo = total - done;
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Статистика задач</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ background: '#1e1e24', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <h3>Всего</h3>
          <p style={{ fontSize: '24px' }}>{total}</p>
        </div>
        <div style={{ background: '#1e1e24', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <h3>Выполнено</h3>
          <p style={{ fontSize: '24px', color: '#4caf50' }}>{done}</p>
        </div>
        <div style={{ background: '#1e1e24', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <h3>В ожидании</h3>
          <p style={{ fontSize: '24px', color: '#ff9800' }}>{todo}</p>
        </div>
        <div style={{ background: '#1e1e24', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <h3>Прогресс</h3>
          <p style={{ fontSize: '24px' }}>{progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;