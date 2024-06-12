import React, { useState } from "react";
import GroupForm from "./components/GroupForm";
import GroupList from "./components/GroupList";
import "./App.css";

/**
 * Main App
 * Manages the state of groups and handles adding, updating, and deleting groups
 */
const App = () => {
  const [groups, setGroups] = useState([]);

  // Function to add a new group
  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  // Function to update an existing group
  const updateGroup = (updatedGroup) => {
    setGroups(
      groups.map((group) =>
        group.id === updatedGroup.id ? updatedGroup : group
      )
    );
  };

  // Function to delete a group
  const deleteGroup = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
  };

  return (
    <div className="App">
      <h1>Group Management</h1>
      <GroupForm addGroup={addGroup} />
      <GroupList
        groups={groups}
        updateGroup={updateGroup}
        deleteGroup={deleteGroup}
      />
    </div>
  );
};

export default App;
