import Column from "./Column";
import { useStore } from '@store/useStore';

function Board({columns}){
    const tasks = useStore((state) => state.tasks);
    const search = useStore((state) => state.search);
    const selectedColumn = useStore((state) => state.selectedColumn);

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
                    columnTask = tasks.filter((t) => t.completed);
                }

                const isFilteringThisColumn = search && (selectedColumn == 'all' || selectedColumn === column.id);

                if(isFilteringThisColumn){
                    columnTask = columnTask.filter((task) =>
                    task.todo.toLowerCase().includes(search.toLowerCase())
                );
                }

                return (
                    <Column
                        key={column.id}
                        title={column.title}
                        tasks={columnTask}
                        search={isFilteringThisColumn ? search : ''}
                    />
                );
            })}
        </div>
    );
}

export default Board;