import React from 'react';
import './Banner.css';

const items = [
  {
    imgSrc: 'src\\assets\\graphic-design (1) 1.jpg',
    title: 'Graphic Design',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
  },
  {
    imgSrc: 'src\\assets\\bullhorn 1.jpg',
    title: 'Digital Marketing',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
  },
  {
    imgSrc: 'src\\assets\\front-end-programming (1) 1.jpg',
    title: 'Web Development',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
  }
];

const Banner = () => {
  return (
    <div className="container">
      <div className="main-section">

        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="image-container">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className="text-container">
              <h5 className="main-title">{item.title}</h5>
              <p className="subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Banner;
