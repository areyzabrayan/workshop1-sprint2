import React from "react";
import image_interective from "../../assets/desktop/image-interactive.jpg";
import "./firstMein.scss";

const FirstMein = () => {
  return (
    <>
      <div className="container">
        <figure>
          <img src={image_interective} alt="image_interective.jpg" />
          <div className="container__in">
            <h2>THE LEADER IN INTERACTIVE VR</h2>
            <p>
              Founded in 2011, Loopstuios has benn producing word-class virtual
              rality projects for some of the best companies around the globe.
              Our award-winning creations have transformed businesses through
              digital experiences that bind to their brand
            </p>
          </div>
        </figure>
      </div>
    </>
  );
};

export default FirstMein;
