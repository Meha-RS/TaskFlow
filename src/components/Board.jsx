function Board({columns}){
    return(
        <div>
            {columns.map((column) => 
                (<p key ={column.id}>{column.title}</p>
            ))}
        </div>
    );
}

export default Board;