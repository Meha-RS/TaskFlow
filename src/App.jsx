import { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';

function App(){

  const [column] = useState([
    {id: 1, title: 'To Do'},
    {id: 2, title: 'In progress'},
    {id: 3, title: 'Done'},
  ]);

  return (
    <div>
      <Header />
      <Board columns={column}/>
    </div>
  )
}

export default App