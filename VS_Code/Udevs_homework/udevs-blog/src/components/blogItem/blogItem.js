import React from "react";
import "./blogItem.css";
import userImg from "../images/userImg.png";
import cardImgL from "../images/cardImageL.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faBookmark, faEye } from "@fortawesome/free-solid-svg-icons";
import cardImg from "../images/cardImage.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BlogItem() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getPosts();
  });

  function getPosts() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container blog-item__container">
      <div className="blog-item__user">
        <img className="user-image" src={userImg} alt="user" />
        <span className="user-name">Dilorom Aliyeva</span>
        <div className="user-buttons">
          <button className="btn btn-follow">Follow</button>
          <button className="btn btn-saved">
            <FontAwesomeIcon icon={(fas, faBookmark)} />
          </button>
        </div>
      </div>
      <div className="blog-item__content">
        <img src={cardImgL} alt="card" className="blog-item__img" />
        <span className="image-owner">
          Фото: <i>Dilorom Alieva</i>
        </span>
        <div className="card-info">
          <p className="card-date">18:26 11.01.2021</p>
          <FontAwesomeIcon icon={(fas, faEye)} />
          <span className="card-number">365</span>
        </div>
        <h2 className="blog-item__title">{posts.title}</h2>
        <p className="blog-item__text">{posts.body}</p>
      </div>
      <div className="blog-item__famous">
        <Link to={`/blogs`} className="card">
          <img
            className="card-img-top"
            src={cardImg}
            alt="card img"
            style={{ width: "103px", height: "100px" }}
          />
          <div className="card-body">
            <h4 className="card-title">lalaku</h4>
            <div className="card-info">
              <p className="card-date">18:26 11.01.2021</p>
              <FontAwesomeIcon icon={(fas, faEye)} />
              <span className="card-number">365</span>
            </div>
          </div>
        </Link>
        <Link to={`/blogs`} className="card">
          <img
            className="card-img-top"
            src={cardImg}
            alt="card img"
            style={{ width: "103px", height: "100px" }}
          />
          <div className="card-body">
            <h4 className="card-title">lalaku</h4>
            <div className="card-info">
              <p className="card-date">18:26 11.01.2021</p>
              <FontAwesomeIcon icon={(fas, faEye)} />
              <span className="card-number">365</span>
            </div>
          </div>
        </Link>
        <Link to={`/blogs`} className="card">
          <img
            className="card-img-top"
            src={cardImg}
            alt="card img"
            style={{ width: "103px", height: "100px" }}
          />
          <div className="card-body">
            <h4 className="card-title">lalaku</h4>
            <div className="card-info">
              <p className="card-date">18:26 11.01.2021</p>
              <FontAwesomeIcon icon={(fas, faEye)} />
              <span className="card-number">365</span>
            </div>
          </div>
        </Link>
        <Link to={`/blogs`} className="card">
          <img
            className="card-img-top"
            src={cardImg}
            alt="card img"
            style={{ width: "103px", height: "100px" }}
          />
          <div className="card-body">
            <h4 className="card-title">lalaku</h4>
            <div className="card-info">
              <p className="card-date">18:26 11.01.2021</p>
              <FontAwesomeIcon icon={(fas, faEye)} />
              <span className="card-number">365</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
