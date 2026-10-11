import { useState } from 'react';
import Header from '@components/Header';
import Board from '@components/Board';
import { useToggle } from '@shared/hooks/useToggle';
function App(){

  const [columns] = useState([
    {id: 1, title: 'To Do'},
    {id: 2, title: 'In progress'},
    {id: 3, title: 'Done'},
  ]);

  const [search, setSearch] = useState('');
  const [isBoardVisible, toggleBoard] = useToggle(true);

  const filteredColumns = columns.filter((columns) => 
    columns.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header
        search={search}
        onSearchChange={setSearch}
        isBoardVisible={isBoardVisible}
        onToggleBoard={toggleBoard}
      />
      {isBoardVisible && <Board columns={filteredColumns}/>}
    </div>
  )
}

export default App