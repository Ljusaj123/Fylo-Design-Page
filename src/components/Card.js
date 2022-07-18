import React from "react";

const Card = ({ props }) => {
  const { text, name, work, image } = props;
  return (
    <div className="card">
      {console.log(text)}
      <div className="card-text">
        <h3>{text}</h3>
      </div>
      <div className="card-user">
        <div className="card-user__image">
          <img src={image} alt="profile" />
        </div>
        <div className="card-user__data">
          <p id="name">{name}</p>
          <p>{work}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
