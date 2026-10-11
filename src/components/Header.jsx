function Header({ search, onSearchChange }){
  return (
    <div>
        <h1>TaskFlow</h1>
        <input
            value={search}
            onChange={(e) =>onSearchChange(e.target.value)}
            placeholder="Search..."
        />
    </div>    
  );
}

export default Header;