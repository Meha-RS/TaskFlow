import Column from "./Column";
import { useStore } from '@store/useStore';

function Board({columns}){
    const tasks = useStore((state) => state.tasks);
    const search = useStore((state) => state.search);
    const selectedColumn = useStore((state) => state.selectedColumn);
    
    const searchedTasks = tasks.filter((task) => {
        if (!search) return true;
        return task.todo.toLowerCase().includes(search.toLowerCase());
    });

    const filteredTasks = searchedTasks.filter((task) => {
        if (selectedColumn === 'all') return true;
        if (selectedColumn === 'todo') return !task.completed;
        if (selectedColumn === 'done') return task.completed;
        return false;
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
                    columnTask = filteredTasks.filter((t) => !t.completed);
                } else if(column.id === 'done'){
                    columnTask = filteredTasks.filter((t) => t.completed)
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