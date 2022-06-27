import React from "react"

const BenefitsItem = ({ text, title, img }) => (
  <li className="benefits-list__item">
    <div className="benefits-list__inner">
      <div className="benefits-list__img-w">
        <img className="benefits-list__img" src={img} alt="" />
      </div>
      <div className="benefits-list__cont">
        <h3 className="benefits-list__title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  </li>
)

export default function Benefits({ data }) {
  console.log('dataTUTKA', data)
  return (
    <section className="benefits" id="benefits">
      <div className="benefits__poligon-bg benefits__poligon-bg--3"></div>
      <div className="benefits__poligon-bg benefits__poligon-bg--4"></div>
      <div className="benefits__poligon-bg benefits__poligon-bg--5"></div>
      <div className="main-container">
        <div className="benefits__poligon-bg benefits__poligon-bg--1"></div>
        <div className="benefits__poligon-bg benefits__poligon-bg--2"></div>
        <div className="benefits__inner">
          <div className="benefits__header">
            <h2 className="benefits__title">{data.title}</h2>
            <p>{data.subtitle}</p>
          </div>
          <ul className="benefits-list">
            {data.ourBenefits.map((item, index) => (
              <BenefitsItem
                title={item.title}
                text={item.desciption}
                img={item.icon.sourceUrl}
                key={index}
              />
            ))}
          </ul>
          <div className="benefits__footer">
            <a
              className="btn btn--lg btn--yellow text-uppercase"
              href={data.button.url}
            >
              {data.button.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
