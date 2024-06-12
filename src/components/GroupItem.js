import React, { useState } from "react";

const GroupItem = ({ group, updateGroup, deleteGroup }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);
  const [posts, setPosts] = useState(group.posts || []);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleUpdate = () => {
    updateGroup({ ...group, name, description, posts });
    setIsEditing(false);
  };

  const addPost = (e) => {
    e.preventDefault();
    const newPost = { title: postTitle, content: postContent };
    setPosts([...posts, newPost]);
    setPostTitle("");
    setPostContent("");
    updateGroup({ ...group, name, description, posts: [...posts, newPost] });
  };

  return (
    <div className="group-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h2>{group.name}</h2>
          <p>{group.description}</p>
          <p>Created at: {new Date(group.createdAt).toLocaleString()}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteGroup(group.id)}>Delete</button>
        </>
      )}

      <div className="posts">
        <h3>Posts</h3>
        <form onSubmit={addPost}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Content:</label>
            <input
              type="text"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Post</button>
        </form>

        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupItem;
