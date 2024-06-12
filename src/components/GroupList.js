import React from "react";
import GroupItem from "./GroupItem";

const GroupList = ({ groups, updateGroup, deleteGroup }) => {
  return (
    <div>
      {groups.map((group) => (
        <GroupItem
          key={group.id}
          group={group}
          updateGroup={updateGroup}
          deleteGroup={deleteGroup}
        />
      ))}
    </div>
  );
};

export default GroupList;
