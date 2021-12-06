import React from "react";
import "./axios-list.css";
import cardImg from "../images/cardImage.png";

import { Link } from "react-router-dom";
export default function Axioslist({ title, id }) {
  return (
    <Link to={`/blogs/${id}`} className="card">
      <img
        className="card-img-top"
        src={cardImg}
        alt="card img"
        style={{ width: "100%", height: "300px" }}
      />
      <div className="card-body">
        <div className="card-info">
          <p className="card-date">18:26 11.01.2021</p>
          <span className="card-number">365</span>
        </div>
        <h4 className="card-title">{title}</h4>
      </div>
    </Link>
  );
}
