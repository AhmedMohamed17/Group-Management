import React, { useState } from "react";

const GroupForm = ({ addGroup }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
      id: Date.now(),
      name,
      description,
      createdAt: new Date().toISOString(),
    };
    addGroup(newGroup);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Group</button>
    </form>
  );
};

export default GroupForm;
