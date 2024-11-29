import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({ task, onToggleTask, onDeleteTask }) {
    return (
      <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          style={{ marginRight: "8px" }}
        />
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            flexGrow: 1,
          }}
        >
          {task.text}
        </span>
        <button onClick={() => onDeleteTask(task.id)} style={{ marginLeft: "8px" }}>
          Delete
        </button>
      </li>
    );
  }