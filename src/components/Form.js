import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault(); // Prevent the default form submission behavior
    if (description.trim()) {
      onAddTask(description); // Pass the task description to the parent
      setDescription(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}