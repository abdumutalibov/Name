import "./axios.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Axioslist from '../Axios-list/axios-list'
export default function  Axios () {
  
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
          <Axioslist key={item.id} title={item.title} id={item.id} />
        ))}
      </div>
    </div>
  );
}
