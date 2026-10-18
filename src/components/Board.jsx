import Column from "./Column";

function Board({columns, tasks, search}){
    return(
        <div style={{ 
            display: 'flex', 
            gap: '20px', 
            padding: '20px', 
            justifyContent: 'center', 
            alignItems: 'flex-start' 
        }}>
            {columns.map((column) =>{
                const searchedTasks = tasks.filter((task) =>
                    task.todo.toLowerCase().includes(search.toLowerCase())
                );

                let columnTask = [];
                if(column.id === 'todo'){
                    columnTask = searchedTasks.filter((t) => !t.completed);
                } else if(column.id === 'done'){
                    columnTask = searchedTasks.filter((t) => t.completed)
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