import React, { useState } from 'react';

export function Welcome({ data }) {
  const [hovered, setHovered] = useState(null);

  const toggleHover = (blockNum) => setHovered(blockNum);

  return (
    <>
      <div className="welcome">
        <div className="welcome__poligon-bg welcome__poligon-bg--1"></div>
        <div className="welcome__poligon-bg welcome__poligon-bg--2"></div>
        <div className="main-container" style={{ minHeight: '100vh' }}>
          <div className="welcome__inner">
            <div className="welcome__cont">
              <h1 className="welcome__title" style={{ maxWidth: '600px' }}>
                <p>{data.title}</p>
              </h1>
              <p>{data.subtitle}</p>
              <ul className="w-nav">
                <li className="w-nav__item">
                  <button
                    className={`w-nav__btn w-nav__btn--1 ${
                      hovered === 1 && 'active'
                    }`}
                    data-phone="w-phones-item-1"
                    onMouseEnter={() => toggleHover(1)}
                    onMouseLeave={() => toggleHover(null)}
                  >
                    <span className="w-nav__btn-img-w">
                      <img
                        className="w-nav__btn-img"
                        src="img/welcome/w-nav-1.png"
                        alt=""
                      />
                    </span>
                    <span className="w-nav__btn-img-h">
                      <img
                        className="w-nav__btn-img"
                        src="img/welcome/w-nav-h-1.png"
                        alt=""
                      />
                    </span>
                  </button>
                </li>
                <li className="w-nav__item">
                  <button
                    className={`w-nav__btn w-nav__btn--2 ${
                      hovered === 2 && 'active'
                    }`}
                    data-phone="w-phones-item-2"
                    onMouseEnter={() => toggleHover(2)}
                    onMouseLeave={() => toggleHover(null)}
                  >
                    <span className="w-nav__btn-img-w">
                      <img
                        className="w-nav__btn-img"
                        src="img/welcome/w-nav-2.png"
                        alt=""
                      />
                    </span>
                    <span className="w-nav__btn-img-h">
                      <img
                        className="w-nav__btn-img"
                        src="img/welcome/w-nav-h-2.png"
                        alt=""
                      />
                    </span>
                  </button>
                </li>
                <li className="w-nav__item">
                  <button
                    className={`w-nav__btn w-nav__btn--3 ${
                      hovered === 3 && 'active'
                    }`}
                    data-phone="w-phones-item-3"
                    onMouseEnter={() => toggleHover(3)}
                    onMouseLeave={() => toggleHover(null)}
                  >
                    <span className="w-nav__btn-img-w">
                      <img
                        className="w-nav__btn-img"
                        src="img/welcome/w-nav-3.png"
                        alt=""
                      />
                    </span>
                    <span className="w-nav__btn-img-h">
                      <img
                        className="w-nav__btn-img"
                        src="img/welcome/w-nav-h-3.png"
                        alt=""
                      />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="welcome__img-w">
              <div className="welcome__img-w-poligon-bg welcome__img-w-poligon-bg--1"></div>
              <div className="welcome__img-w-poligon-bg welcome__img-w-poligon-bg--2"></div>
              <div className="welcome__img-w-inner">
                <div className="w-phones">
                  <div
                    onMouseEnter={() => toggleHover(1)}
                    onMouseLeave={() => toggleHover(null)}
                    className={`w-phones__item w-phones__item--1 ${
                      hovered === 1 && 'active'
                    }`}
                    id="w-phones-item-1"
                  >
                    <img
                      className="w-phones__img"
                      src="img/w-phones/w-phones-1.png"
                      alt=""
                    />
                  </div>
                  <div
                    className={`w-phones__item w-phones__item--2 ${
                      hovered === 2 && 'active'
                    }`}
                    onMouseEnter={() => toggleHover(2)}
                    onMouseLeave={() => toggleHover(null)}
                    id="w-phones-item-2"
                  >
                    <img
                      className="w-phones__img"
                      src="img/w-phones/w-phones-2.png"
                      alt=""
                    />
                  </div>
                  <div
                    className={`w-phones__item w-phones__item--3 ${
                      hovered === 3 && 'active'
                    }`}
                    onMouseEnter={() => toggleHover(3)}
                    onMouseLeave={() => toggleHover(null)}
                    id="w-phones-item-3"
                  >
                    <img
                      className="w-phones__img"
                      src="img/w-phones/w-phones-3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="welcome__next-section">
              <svg className="icon icon--down-arrows">
                <use href="img/sprite.svg#down-arrows"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
