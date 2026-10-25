function Column({ title, tasks, search }) {
  return (
    <div style={{ 
        backgroundColor: '#1e1e24', 
        borderRadius: '8px', 
        padding: '16px', 
        width: '300px',
        flexShrink: 0,
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      <h3 style={{ marginTop: 0, textAlign: 'center', color: '#fff' }}>{title}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {tasks.length === 0 ? (
          <p style={{ color: '#888', textAlign: 'center' }}>
            {search ? `По запросу "${search}" ничего не найдено` : 'Нет задач'}
          </p>
        ) : (
          tasks.map((task) => (
            <div 
              key={task.id} 
              style={{ 
                backgroundColor: '#2d2d35', 
                padding: '12px', 
                borderRadius: '6px', 
                color: '#ddd',
                fontSize: '14px',
                borderLeft: task.completed ? '4px solid #4caf50' : '4px solid #ff9800'
              }}
            >
              {task.todo}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Column;