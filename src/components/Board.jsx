import Column from "./Column";

function Board({columns, tasks, search}){
    const searchedTasks = tasks.filter((task) => {
        if (!search) return true;
        return task.todo.toLowerCase().includes(search.toLowerCase());
    });

    if (search && searchedTasks.length === 0) {
        return <p style={{ textAlign: 'center', marginTop: '20px' }}>По вашему запросу ничего не найдено</p>;
    }

    if (tasks.length === 0 && !search) {
        return <p style={{ textAlign: 'center', marginTop: '20px' }}>Задач пока нет</p>;
    }

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