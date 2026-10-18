import { useState } from 'react';
import Header from '@components/Header';
import Board from '@components/Board';
const API = 'https://dummyjson.com/todos';
function App(){

  const [columns] = useState([
    {id: 'todo', title: 'Ожидание'},
    {id: 'progress', title: 'В процессе'},
    {id: 'done', title: 'Выполненые'},
  ]);

  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filteredColumns = columns.filter((columns) => 
    columns.title.toLowerCase().includes(search.toLowerCase())
  );

  const loadTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API);
      const data = await response.json();
      setTasks(data.todos);
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };

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

      <Board columns={filteredColumns} tasks={tasks}
    />
    </div>
  )
}

export default App