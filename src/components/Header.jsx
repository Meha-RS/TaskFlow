import Input from '@shared/ui/Input/Input';
import Button from '@shared/ui/Button/Button';
function Header({ search, onSearchChange, isBoardVisible, onToggleBoard }){
  return (
    <div>
        <h1>TaskFlow</h1>
        <Input
            value={search}
            onChange={(e) =>onSearchChange(e.target.value)}
            placeholder="Search..."
        />
        {search && (
            <Button onClick={() => onSearchChange('')}>Clear</Button>
        )}
        <Button onClick={onToggleBoard}>
        {isBoardVisible ? 'Hide' : 'View'}
      </Button>
    </div>    
  );
}

export default Header;