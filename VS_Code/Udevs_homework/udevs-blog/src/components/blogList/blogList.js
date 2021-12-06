import "./blogList.css";
import React from "react";
import BlogListItem from "../blogListItem/blogListItem";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <div className="d-grid blog-list">
        {posts.map((item) => (
          <BlogListItem key={item.id} title={item.title} id={item.id} />
        ))}
      </div>
    </div>
  );
}
