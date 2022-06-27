import React from "react"
import darkLogo from "../../static/img/logo-black.svg"
import bg from "../../static/img/footer.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";

export function Footer() {
  return (
    <div className="footer">
      <div className="main-container">
        <img className="footer__bg" src={bg} alt="" />
        <div className="footer__inner">
          <img className="footer__logo" src={darkLogo} alt="" />
          <ul className="footer-nav">
            <li className="footer-nav__item">
              <AnchorLink className="footer-nav__link" to="/#u-club">
                Клубы
              </AnchorLink>
            </li>
            <li className="footer-nav__item">
              <AnchorLink className="footer-nav__link" to="/#union">
                Наши союзы
              </AnchorLink>
            </li>
            <li className="footer-nav__item">
              <AnchorLink className="footer-nav__link" to="/#tournaments">
                Турниры
              </AnchorLink>
            </li>
            <li className="footer-nav__item">
              <AnchorLink className="footer-nav__link" to="/#download">
                Агентам
              </AnchorLink>
            </li>
            <li className="footer-nav__item">
              <AnchorLink className="footer-nav__link" to="/#about">
                Блог
              </AnchorLink>
            </li>
            <li className="footer-nav__item">
              <AnchorLink className="footer-nav__link" to="/#benefits">
                О Нас
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
