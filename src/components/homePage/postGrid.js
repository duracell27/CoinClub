import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const PostItem = ({ img, date, title, text, uri, position }) => {
  const formatedDate = new Date(date);
  return (
    <li className={`about-list__item about-list__item--${position}`}>
      <img className="about-list__img" src={img} alt="" />
      <div className="about-list__inner">
        <div className="about-list__date">
          {formatedDate.toLocaleDateString('en-ZA')}
        </div>
        <div className="about-list__title">{title}</div>
        <div
          className="about-list__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <svg className="icon icon--angle-o-right about-list__arrow">
          <use href="img/sprite.svg#angle-o-right"></use>
        </svg>
      </div>
      <Link className="about-list__link-to" itemProp="url" to={uri} />
    </li>
  );
};

export default function PostGrid({ staticData }) {
  const data = useStaticQuery(graphql`
    {
      allWpPost(limit: 4) {
        nodes {
          title
          date
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          excerpt
        }
      }
    }
  `);

  return (
    <section className="about" id="about">
      <div className="about__poligon-bg about__poligon-bg--1"></div>
      <div className="about__poligon-bg about__poligon-bg--2"></div>
      <div className="about__poligon-bg about__poligon-bg--3"></div>
      <div className="about__poligon-bg about__poligon-bg--4"></div>
      <div className="main-container">
        <div className="about__inner">
          <div className="about__header">
            <h2 className="about__title">{staticData.title}</h2>
            <div className="about__text">
              <p>{staticData.subtitle}</p>
            </div>
            <a
              className="btn btn--yellow btn--lg text-uppercase about__header-btn"
              href={staticData.button.url}
            >
              {staticData.button.title}
            </a>
          </div>

          <ul className="about-list">
            {data.allWpPost.nodes.map((item, index) => (
              <PostItem
                key={index}
                position={index + 1}
                img={item.featuredImage.node.sourceUrl}
                date={item.date}
                title={item.title}
                uri={item.uri}
                text={item.excerpt}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
