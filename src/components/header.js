import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../../static/img/logo.svg';
import ru from '../../static/img/lang/ru.png';
import en from '../../static/img/lang/en.png';
import sp from '../../static/img/lang/sp.png';
import { AnchorLink } from "gatsby-plugin-anchor-links";

export function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 50) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className="header">
      <div
        className={menuActive ? 'blur active' : 'blur'}
        onClick={() => setMenuActive(false)}
      ></div>
      <div
        className={isVisible ? 'header' : 'header header--sticky'}
        id="header"
      >
        <div className="main-container">
          <div className="header__inner">
            <div
              className={
                menuActive ? 'header__burger active' : 'header__burger'
              }
              onClick={() => setMenuActive(!menuActive)}
            >
              <span />
            </div>

            <Link className="header__logo" to="/">
              <img className="header__logo-img" src={logo} alt="" />
            </Link>
            <div
              className={menuActive ? 'menu active' : 'menu'}
              onClick={() => setMenuActive(false)}
            >
              <ul className="menu__content">
                <li className="menu__item">
                  <AnchorLink className="menu__link" to="/#u-club">
                    Клубы
                  </AnchorLink>
                </li>
                <li className="menu__item">
                  <AnchorLink className="menu__link" to="/#union">
                    Наши союзы
                  </AnchorLink>
                </li>
                <li className="menu__item">
                  <AnchorLink className="menu__link" to="/#tournaments">
                    Турниры
                  </AnchorLink>
                </li>
                <li className="menu__item">
                  <AnchorLink className="menu__link" to="/#download">
                    Агентам
                  </AnchorLink>
                </li>
                <li className="menu__item">
                  <AnchorLink className="menu__link" to="/#about">
                    Блог
                  </AnchorLink>
                </li>
                <li className="menu__item">
                  <AnchorLink className="menu__link" to="/#benefits">
                    О Нас
                  </AnchorLink>
                </li>
              </ul>
            </div>

            <div className="lang">
              <div className="lang__selected">
                <span className="lang__selected-name">Русский</span>
                <div className="lang__selected-icon">
                  <img src={ru} alt="" />
                </div>
              </div>
              <div className="lang__drop">
                <div className="lang__drop-inner">
                  <ul className="lang-drop-list">
                    <li className="lang-drop-list__item">
                      <a className="lang-drop-list__link" href="">
                        <span className="lang-drop-list__link-icon">
                          <img src={ru} alt="" />
                        </span>
                        <span className="lang-drop-list__link-text">
                          Русский
                        </span>
                      </a>
                    </li>
                    <li className="lang-drop-list__item">
                      <a className="lang-drop-list__link" href="">
                        <span className="lang-drop-list__link-icon">
                          <img src={en} alt="" />
                        </span>
                        <span className="lang-drop-list__link-text">
                          English
                        </span>
                      </a>
                    </li>
                    <li className="lang-drop-list__item">
                      <a className="lang-drop-list__link" href="">
                        <span className="lang-drop-list__link-icon">
                          <img src={sp} alt="" />
                        </span>
                        <span className="lang-drop-list__link-text">
                          Spanish
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
