import React from 'react';
import Table from '../components/tournaments/tournamentsTest';
import Layout from '../components/layout';

const Tournaments = () => {
  return (
    <Layout>
      <div className="tournaments-page">
        {/* <div className="main-container">
          <div className="tournaments-page-wrapper">
            <div className="welcome__poligon-bg welcome__poligon-bg--1"></div>
            <div className="welcome__poligon-bg welcome__poligon-bg--2"></div>
            <div className="benefits__poligon-bg benefits__poligon-bg--3"></div>
            <div className="benefits__poligon-bg benefits__poligon-bg--4"></div>
            <div className="welcome__cont">
              <h1 className="welcome__title">
                <span>
                  {' '}
                  Покерный <br /> нок-аут турнир!
                </span>
              </h1>
              <p>
                Получайте больше возможностей для выигрыша <br />
                благодаря покерным нокаут-турнирам!
              </p>
            </div>
            <div className="welcome__img-w">
              <img className="bitmap__img" src="img/bitmap.png" alt="" />
            </div>
          </div>

          <ul className="u-club-filter">
            <li className="u-club-filter__item">
              <div className="filter">
                <div className="filter__selected">
                  <label className="u-club-filter__inner">
                    <div className="u-club-filter__cont">Дата</div>
                    <div className="u-club-filter__arrow"></div>
                  </label>
                </div>
                <div className="filter__drop">
                  <div className="filter__drop-inner">
                    <ul className="filter-drop-list">
                      <li className="tournaments-page-filter__item">
                        <label className="tournaments-page-filter__inner">
                          <input
                            className="tournaments-page-filter__input"
                            type="checkbox"
                          />
                          <div className="tournaments-page-filter__cont">
                            <div className="tournaments-page-filter__cont-status"></div>
                            Сегодня
                          </div>
                        </label>
                      </li>
                      <li className="tournaments-page-filter__item">
                        <label className="tournaments-page-filter__inner">
                          <input
                            className="tournaments-page-filter__input"
                            type="checkbox"
                          />
                          <div className="tournaments-page-filter__cont">
                            <div className="tournaments-page-filter__cont-status"></div>
                            Завтра
                          </div>
                        </label>
                      </li>
                      <li className="tournaments-page-filter__item">
                        <label className="tournaments-page-filter__inner">
                          <input
                            className="tournaments-page-filter__input"
                            type="checkbox"
                          />
                          <div className="tournaments-page-filter__cont">
                            <div className="tournaments-page-filter__cont-status"></div>
                            Неделя
                          </div>
                        </label>
                      </li>
                      <li className="tournaments-page-filter__item">
                        <label className="tournaments-page-filter__inner">
                          <input
                            className="tournaments-page-filter__input"
                            type="checkbox"
                          />
                          <div className="tournaments-page-filter__cont">
                            <div className="tournaments-page-filter__cont-status"></div>
                            Месяц
                          </div>
                        </label>
                      </li>
                      <li className="tournaments-page-filter__item">
                        <label className="tournaments-page-filter__inner">
                          <input
                            className="tournaments-page-filter__input"
                            type="checkbox"
                          />
                          <div className="tournaments-page-filter__cont">
                            <div className="tournaments-page-filter__cont-status"></div>
                            Год
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="u-club-filter__item">
              <div className="filter">
                <div className="filter__selected">
                  <label className="u-club-filter__inner">
                    <div className="u-club-filter__cont">Формат</div>
                    <div className="u-club-filter__arrow"></div>
                  </label>
                </div>
                <div className="filter__drop">
                  <div className="filter__drop-inner">
                    <ul className="filter-drop-list">
                      <li className="filter-drop-list__item"></li>
                      <li className="filter-drop-list__item"></li>
                      <li className="filter-drop-list__item"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="u-club-filter__item">
              <div className="filter">
                <div className="filter__selected">
                  <label className="u-club-filter__inner">
                    <div className="u-club-filter__cont">Приложение</div>
                    <div className="u-club-filter__arrow"></div>
                  </label>
                </div>
                <div className="filter__drop">
                  <div className="filter__drop-inner">
                    <ul className="filter-drop-list">
                      <li className="filter-drop-list__item"></li>
                      <li className="filter-drop-list__item"></li>
                      <li className="filter-drop-list__item"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div> */}

        <div className="table-wrapper">
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default Tournaments;
