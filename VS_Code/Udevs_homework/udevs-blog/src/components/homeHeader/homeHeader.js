import React from "react";
import "./homeHeader.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faBell } from "@fortawesome/free-solid-svg-icons";

export default function HomeHeader() {
  return (
    <header className="home-header">
      <div className="header-top">
        <div className="container header-top__container">
          <a className="site-logo" href="/">
            <img
              src={logo}
              style={{ width: "146px", height: "49px" }}
              alt="site-logo"
            />
          </a>
          <div className="header-top__notification">
            <FontAwesomeIcon
              className="notification__bell"
              icon={(fas, faBell)}
            />
            <span className="notification__count">1</span>
          </div>
          <a className="nav-link register" href="/signIn">
            Войти
          </a>
        </div>
      </div>
      <nav className="header__nav">
        <div className="container header-nav__container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Все потоки
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Разработка
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Администрирование
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Дизайн
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Менеджмент
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Маркетинг
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Научпоп
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
