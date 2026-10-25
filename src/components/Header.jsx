import Input from '@shared/ui/Input/Input';
import Button from '@shared/ui/Button/Button';
import { useStore } from '@store/useStore';
function Header({}){
  const search = useStore((state) => state.search);
  const setSearch = useStore((state) => state.setSearch);
  const selectedColumn = useStore((state) => state.selectedColumn);
  const setSelectedColumn = useStore((state) => state.setSelectedColumn);
  return (
    <div>
        <h1>TaskFlow</h1>
        <Input
            value={search}
            onChange={(e) =>setSearch(e.target.value)}
            placeholder="Search..."
        />
        {search && (
            <Button onClick={() => setSearch('')}>Clear</Button>
        )}

        <select 
          value={selectedColumn} 
          onChange={(e) => setSelectedColumn(e.target.value)}
          style={{
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #555',
            backgroundColor: '#2d2d35',
            color: 'white',
            height: '38px'
          }}
        >
          <option value="all">Все колонки</option>
          <option value="todo">Ожидание</option>
          <option value="progress">В процессе</option>
          <option value="done">Выполненные</option>
        </select>
    </div>    
  );
}

export default Header;