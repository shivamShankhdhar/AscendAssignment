import React from 'react';
import Task from './Task';
import { useDrop } from 'react-dnd';

function List({ list, onTaskDrop, onTaskComplete }) {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onTaskDrop(item.id, list.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className={`List ${isOver ? 'List--droppable' : ''}`} ref={drop}>
      <h3>{list.name}</h3>
      {list.tasks.map((task) => (
        <Task key={task.id} task={task} onTaskComplete={onTaskComplete} />
      ))}
    </div>
  );
}

export default List;
