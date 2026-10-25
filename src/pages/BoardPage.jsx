import { useState, useEffect } from 'react';
import Board from '@components/Board';
import Input from '@/shared/ui/Input/Input';
import { fetchTasks } from '@api/task';
import { useStore } from '@store/useStore';

function BoardPage() {
  const [columns] = useState([
    { id: 'todo', title: 'Ожидание' },
    { id: 'progress', title: 'В процессе' },
    { id: 'done', title: 'Выполненные' },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const setTasks = useStore((state) => state.setTasks);
  const tasks = useStore((state) => state.tasks);

  const search = useStore((state) => state.search);
  const setSearch = useStore((state) => state.setSearch);
  const selectedColumn = useStore((state) => state.selectedColumn);
  const setSelectedColumn = useStore((state) => state.setSelectedColumn);

  const loadTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      setError('Не удалось загрузить задачи. Проверьте интернет.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (tasks.length === 0) {
      loadTasks();
    }}, []); 

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <select 
          value={selectedColumn} 
          onChange={(e) => setSelectedColumn(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#2d2d35', color: 'white', height: '38px' }}
        >
          <option value="all">Все колонки</option>
          <option value="todo">Ожидание</option>
          <option value="progress">В процессе</option>
          <option value="done">Выполненные</option>
        </select>
      </div>

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <button onClick={loadTasks} disabled={isLoading}>
          {isLoading ? 'Загрузка...' : 'Обновить задачи'}
        </button>
      </div>

      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      )}

      {!error && <Board columns={columns} />}
    </div>
  );
}

export default BoardPage;