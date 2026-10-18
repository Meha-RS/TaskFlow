import { useState, useEffect } from 'react';
import Header from '@components/Header';
import Board from '@components/Board';
import { fetchTasks } from '@api/task';
function App(){

  const [columns] = useState([
    {id: 'todo', title: 'Ожидание'},
    {id: 'progress', title: 'В процессе'},
    {id: 'done', title: 'Выполненые'},
  ]);

  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      setError('Не удалось загрузить задачи. Проверьте интернет.');
      console.error('Ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []); 

  return (
    <div>
      <Header
        search={search}
        onSearchChange={setSearch}
      />

      <div style={{ margin: '20px' }}>
        <button onClick={loadTasks} disabled={isLoading}>
          {isLoading ? 'Загрузка...' : 'Загрузить задачи'}
        </button>
      </div>

      {error &&(
        <p style={{collor: 'red', marginTop:'10px'}}>{error}</p>
      )}

      {!error &&(
        <Board columns={columns} tasks={tasks} search={search}/>
      )}
    </div>
  )
}

export default App