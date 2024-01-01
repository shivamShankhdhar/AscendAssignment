import React, { useState, useEffect } from 'react';
import ListContainer from './components/ListContainer';
import './App.css';

function App() {
  const [lists, setLists] = useState([]);
console.log(lists);
  useEffect(() => {
    // Fetch lists from the API when the component mounts
    // Replace 'fetchListsFromAPI' with the actual API call function
    fetchListsFromAPI().then((data) => setLists(data));
  }, []);

  const handleTaskDrop = (taskId, newListId) => {
    // Update the task's list ID in the backend
    // Replace 'updateTaskListIdInAPI' with the actual API call function
    updateTaskListIdInAPI(taskId, newListId);

    // Update the task's list ID in the frontend
    const updatedLists = lists.map((list) => ({
      ...list,
      tasks: list.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, listId: newListId };
        }
        return task;
      }),
    }));

    setLists(updatedLists);
  };

  const handleTaskComplete = (taskId) => {
    // Mark the task as completed in the backend
    // Replace 'markTaskCompleteInAPI' with the actual API call function
    markTaskCompleteInAPI(taskId);

    // Remove the task from the list in the frontend
    const updatedLists = lists.map((list) => ({
      ...list,
      tasks: list.tasks.filter((task) => task.id !== taskId),
    }));

    setLists(updatedLists);
  };

  return (
    <div className="App">
      <ListContainer
        lists={lists}
        onTaskDrop={handleTaskDrop}
        onTaskComplete={handleTaskComplete}
      />
    </div>
  );
}

export default App;
