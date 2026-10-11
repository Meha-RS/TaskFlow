import { useState } from 'react';
import Header from '@components/Header';
import Board from '@components/Board';

function App(){

  const [columns] = useState([
    {id: 1, title: 'To Do'},
    {id: 2, title: 'In progress'},
    {id: 3, title: 'Done'},
  ]);

  const [search, setSearch] = useState('');

  const filteredColumns = columns.filter((columns) => 
    columns.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header search={search} onSearchChange={setSearch}/>
      <Board columns={filteredColumns}/>
    </div>
  )
}

export default App