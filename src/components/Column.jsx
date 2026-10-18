function Column({ title, tasks }) {
  return (
    <div style={{ 
        backgroundColor: '#1e1e24', 
        borderRadius: '8px', 
        padding: '16px', 
        width: '300px',
        flexShrink: 0,
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
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