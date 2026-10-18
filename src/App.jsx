import { useState } from 'react';
import Header from '@components/Header';
import Board from '@components/Board';
const API = 'https://dummyjson.com/todos';
function App(){

  const [columns] = useState([
    {id: 1, title: 'To Do'},
    {id: 2, title: 'In progress'},
    {id: 3, title: 'Done'},
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
      <div style={{ margin: '20px' }}>
        {tasks.map((task) => (
          <p key={task.id}>{task.todo}</p>
        ))}
      </div>

      <Board columns={filteredColumns}
    />
    </div>
  )
}

export default App