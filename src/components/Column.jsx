function Column({ title, tasks }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', minWidth: '200px' }}>
      <h3>{title}</h3>
      
      {tasks.length === 0 ? (
        <p>Нет задач</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} style={{ border: '1px solid #444', margin: '5px 0', padding: '5px' }}>
            {task.todo}
          </div>
        ))
      )}
    </div>
  );
}

export default Column;