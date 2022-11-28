import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task) => {
    return <Task key={task.text} {...task} onDeleteTask={onDeleteTask} />;
  });

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
