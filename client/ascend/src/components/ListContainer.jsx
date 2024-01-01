import React from 'react';
import List from './List';

function ListContainer({ lists, onTaskDrop, onTaskComplete }) {
  return (
    <div className="ListContainer">
      {lists.map((list) => (
        <List
          key={list.id}
          list={list}
          onTaskDrop={onTaskDrop}
          onTaskComplete={onTaskComplete}
        />
      ))}
    </div>
  );
}

export default ListContainer;
