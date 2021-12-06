import React from "react";
import "./header.css";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top__container">
          <a className="site-logo" href="/">
            <img
              src={logo}
              style={{ width: "146px", height: "49px" }}
              alt="site-logo"
            />
          </a>
          <nav className="header__nav">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="/">
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
          </nav>
          <a className="nav-link register" href="/signIn">
            Войти
          </a>
        </div>
      </div>
    </header>
  );
}
