import React, { useRef, useState } from "react";
import "./slider.css";

const Slider = ({ setActiveTab, tabItems, activeTab }) => {
  const [slidePixels, setSlidePixels] = useState(0);

  const sliderRef = useRef(null);

  const handleSlider = (direction) => {
    const { current } = sliderRef;

    if (direction === "left") {
      current.scrollLeft -= 160;
    } else {
      current.scrollLeft += 160;
    }
  };

  return (
    <div className="category-slider">
      <div
        className="slider-control left"
        onClick={() => {
          handleSlider("left");
        }}
      >
        <svg className="slider-control-icon icon-small-arrow">
          <use xlinkHref="#svg-small-arrow"></use>
        </svg>
      </div>
      <nav className="section-navigation search-slider" ref={sliderRef}>
        <div
          id="section-navigation-slider"
          className="section-menu"
          style={{
            transitionDuration: "0.3s",
            transform: `translate3d(${slidePixels}px, 0px, 0px)`,
          }}
        >
          {tabItems.map((category, index) => (
            <a
              className={`section-menu-item tab-slider-item ${
                activeTab === category.select ? "active" : ""
              }`}
              style={{ flex: "1", cursor: "pointer" }}
              key={index}
              onClick={() => {
                setActiveTab(category.select);
                window.scrollTo(0, 0);
              }}
            >
              {category.icon}

              <p className="section-menu-item-text">{category.name}</p>
            </a>
          ))}
        </div>
      </nav>

      <div
        className="slider-control right"
        onClick={() => {
          handleSlider("right");
        }}
      >
        <svg className="slider-control-icon icon-small-arrow">
          <use xlinkHref="#svg-small-arrow"></use>
        </svg>
      </div>
    </div>
  );
};

export default Slider;
