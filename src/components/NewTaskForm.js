import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  const optionsElement = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={handleCategoryChange}
          name="category"
        >
          {optionsElement}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
