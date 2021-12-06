import React from "react";
import "./footer.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <a className="site-logo" href="/">
              <img
                src={logo}
                style={{ width: "146px", height: "49px" }}
                alt="site-logo"
              />
            </a>
            <p className="footer__text">
              Помощник в публикации статей, журналов. Список популярных
              международных конференций. Всё для студентов и преподавателей.
            </p>
            <p className="footer__copyright">
              Copyright © 2021. Doniyorbek Asqaraliyev. All rights reserved.
            </p>
          </li>
          <li className="footer__item">
            <h3 className="footer__title">Ресурсы</h3>
            <nav className="nav flex-column">
              <a className="nav-link" href="/">
                Статьи
              </a>
              <a className="nav-link" href="/">
                Журналы
              </a>
              <a className="nav-link" href="/">
                Газеты
              </a>
              <a className="nav-link" href="/">
                Диплом
              </a>
            </nav>
          </li>
          <li className="footer__item">
            <h3 className="footer__title">О нас</h3>
            <nav className="nav flex-column">
              <a className="nav-link" href="/">
                Контакты
              </a>
              <a className="nav-link" href="/">
                Помощь
              </a>
              <a className="nav-link" href="/">
                Заявки
              </a>
              <a className="nav-link" href="/">
                Политика
              </a>
            </nav>
          </li>
          <li className="footer__item">
            <h3 className="footer__title">Помощь</h3>
            <nav className="nav flex-column">
              <a className="nav-link" href="/">
                Часто задаваемые вопросы
              </a>
            </nav>
          </li>
        </ul>
      </div>
    </footer>
  );
}
