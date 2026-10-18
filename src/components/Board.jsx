import Column from "./Column";

function Board({columns, tasks}){
    return(
        <div style={{ 
            display: 'flex', 
            gap: '20px', 
            padding: '20px', 
            justifyContent: 'center', 
            alignItems: 'flex-start' 
        }}>
            {columns.map((column) =>{
                let columnTask = [];
                if(column.id === 'todo'){
                    columnTask = tasks.filter((t) => !t.completed);
                } else if(column.id === 'done'){
                    columnTask = tasks.filter((t) => t.completed)
                }

                return (
                    <Column
                        key={column.id}
                        title={column.title}
                        tasks={columnTask}
                    />
                );
            })}
        </div>
    );
}

export default Board;