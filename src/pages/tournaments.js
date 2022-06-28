import React, { useState } from 'react';
import Table from '../components/tournaments/tournamentsTest';
import Layout from '../components/layout';

const Tournaments = () => {
  // dataFilter
  const [dataFilter, setDataFilter] = useState({
    today: false,
    tomorrow: false,
    week: false,
  })
  const dataFilterChangeHandler = (e) => {
    let updatedDataFilter = { ...dataFilter }
    updatedDataFilter[e.target.name] = e.target.checked
    setDataFilter(updatedDataFilter)
  }
  // end dataFilter

  // formatFilter
  const [formatFilter, setFormatFilter] = useState({
    PKO: false,
    KO: false,
    "R&A": false,
    R: false,
  })
  const formatFilterChangeHandler = (e) => {
    let updatedFormatFilter = { ...formatFilter }
    updatedFormatFilter[e.target.name] = e.target.checked
    setFormatFilter(updatedFormatFilter)
  }
  // end formatFilter

  // appFilter
  const [appFilter, setAppFilter] = useState({
    PPPoker: false,
    PokerBros: false,
    ClubGG: false,
  })
  const appFilterChangeHandler = (e) => {
    let updatedAppFilter = { ...appFilter }
    updatedAppFilter[e.target.name] = e.target.checked
    setAppFilter(updatedAppFilter)
  }
  // end appFilter
  return (
    <Layout>
      <div className="tournaments-page">
        <div className="main-container">
          {/* <div className="tournaments-page-wrapper">
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
          </div> */}

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
                            type="checkbox" name='today'
                            onChange={dataFilterChangeHandler}
                            checked={dataFilter.today}
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
                            type="checkbox" name='tomorrow'
                            onChange={dataFilterChangeHandler}
                            checked={dataFilter.tomorrow}
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
                            type="checkbox" name='week'
                            onChange={dataFilterChangeHandler}
                            checked={dataFilter.week}
                          />
                          <div className="tournaments-page-filter__cont">
                            <div className="tournaments-page-filter__cont-status"></div>
                            Неделя
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
                      <li className="tournaments-page-filter__item"><label className="tournaments-page-filter__inner">
                        <input
                          className="tournaments-page-filter__input"
                          type="checkbox" name='PKO'
                          onChange={formatFilterChangeHandler}
                          checked={formatFilter.PKO}
                        />
                        <div className="tournaments-page-filter__cont">
                          <div className="tournaments-page-filter__cont-status"></div>
                          PKO
                        </div>
                      </label></li>
                      <li className="tournaments-page-filter__item"><label className="tournaments-page-filter__inner">
                        <input
                          className="tournaments-page-filter__input"
                          type="checkbox" name='KO'
                          onChange={formatFilterChangeHandler}
                          checked={formatFilter.KO}
                        />
                        <div className="tournaments-page-filter__cont">
                          <div className="tournaments-page-filter__cont-status"></div>
                          KO
                        </div>
                      </label></li>
                      <li className="tournaments-page-filter__item"><label className="tournaments-page-filter__inner">
                        <input
                          className="tournaments-page-filter__input"
                          type="checkbox" name='R&A'
                          onChange={formatFilterChangeHandler}
                          checked={formatFilter['R&A']}
                        />
                        <div className="tournaments-page-filter__cont">
                          <div className="tournaments-page-filter__cont-status"></div>
                          R&A
                        </div>
                      </label></li><li className="tournaments-page-filter__item"><label className="tournaments-page-filter__inner">
                        <input
                          className="tournaments-page-filter__input"
                          type="checkbox" name='R'
                          onChange={formatFilterChangeHandler}
                          checked={formatFilter.R}
                        />
                        <div className="tournaments-page-filter__cont">
                          <div className="tournaments-page-filter__cont-status"></div>
                          R
                        </div>
                      </label></li>
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
                    <li className="tournaments-page-filter__item"><label className="tournaments-page-filter__inner">
                        <input
                          className="tournaments-page-filter__input"
                          type="checkbox" name='PPPoker'
                          onChange={appFilterChangeHandler}
                          checked={appFilter.PPPoker}
                        />
                        <div className="tournaments-page-filter__cont">
                          <div className="tournaments-page-filter__cont-status"></div>
                          PPPoker
                        </div>
                      </label></li>
                      <li className="tournaments-page-filter__item"><label className="tournaments-page-filter__inner">
                        <input
                          className="tournaments-page-filter__input"
                          type="checkbox" name='PokerBros'
                          onChange={appFilterChangeHandler}
                          checked={appFilter.PokerBros}
                        />
                        <div className="tournaments-page-filter__cont">
                          <div className="tournaments-page-filter__cont-status"></div>
                          PolerBros
                        </div>
                      </label></li>
                      <li className="tournaments-page-filter__item"><label className="tournaments-page-filter__inner">
                        <input
                          className="tournaments-page-filter__input"
                          type="checkbox" name='ClubGG'
                          onChange={appFilterChangeHandler}
                          checked={appFilter.ClubGG}
                        />
                        <div className="tournaments-page-filter__cont">
                          <div className="tournaments-page-filter__cont-status"></div>
                          ClubGG
                        </div>
                      </label></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="table-wrapper">
          <Table dataFilter={dataFilter} formatFilter={formatFilter} appFilter={appFilter}/>
        </div>
      </div>
    </Layout>
  );
};

export default Tournaments;
