import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);  // ✅ Default as array

  useEffect(() => {
    axios.get("http://localhost:3005/getposts")
      .then(response => {
        console.log(response.data); // 🔍 Debugging
        setPosts(Array.isArray(response.data) ? response.data : []); // ✅ Ensure it's an array
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        setPosts([]); // ✅ Ensure array even on error
      });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3005/deletepost/${id}`);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>Posts List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
               
                <Link to={`/edit/${post.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
               &nbsp;
                <button onClick={() => handleDelete(post.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
