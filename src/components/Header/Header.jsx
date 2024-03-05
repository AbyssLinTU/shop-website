import React from "react";
import c from "./Header.module.scss";
import logo from "./../../img/Logo.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={c.header}>
      <div className={c.top__header}>
        <div className={c.container}>
          <div className={c.top__flex}>
            <span>Служба підтримки: +38(068) 371-36-50</span>
            <span>Повернення та обмін</span>
          </div>
        </div>
      </div>
      <div className={c.bottom__header}>
        <div className={c.container}>
          <div className={c.bottom__flex}>
            <img
              className={c.logo}
              onClick={() => navigate("/main")}
              src={logo}
              alt=""
            />
            <div className={c.menu}>
              <input
                className={c.input}
                type="text"
                placeholder="Пошук товарів"
              />
              <div className={c.buttons}>
                <button className={c.button}>Оплата</button>
                <button className={c.button}>Доставка</button>
                <button className={c.button}>Акції</button>
                <NavLink to="/about" className={c.button}>
                  О нас
                </NavLink>
                <button className={c.button}>Відгуки</button>
              </div>
              <div className={c.icons}>
                <div className={c.icon__user}></div>
                <div
                  className={c.icon__basket}
                  onClick={() => navigate("/basket")}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
