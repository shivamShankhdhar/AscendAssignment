import React from 'react';

function Task({ task, onTaskComplete }) {
  const handleComplete = () => {
    // Handle task completion
    onTaskComplete(task.id);
  };

  return (
    <div className={`Task ${task.completed ? 'Task--completed' : ''}`}>
      <span>{task.name}</span>
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
}

export default Task;
