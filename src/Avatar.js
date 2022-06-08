

import React from "react";
import './App.css';

const Avatar = ({image, firstName, lastName}) => {
  return (
    <div className="Friend-item">
      <img src={image} alt="" />
      <h3>{firstName}</h3>
      <h4>{lastName.toUpperCase()}</h4>      
    </div>
  );
};

export default Avatar;