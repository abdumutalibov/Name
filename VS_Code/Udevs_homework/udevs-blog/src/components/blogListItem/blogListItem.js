import React from "react";
import "./blogListItem.css";
import cardImg from "../images/smoking.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function BlogListItem({ title, id }) {
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
          <FontAwesomeIcon icon={(fas, faEye)} />
          <span className="card-number">365</span>
        </div>
        <h4 className="card-title">{title}</h4>
      </div>
    </Link>
  );
}
