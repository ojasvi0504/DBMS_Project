import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            We're Nisha Shetty and Ojasvi Doye, students passionate about technology and healthcare. Together, we've developed this Hospital Management System as part of our project. With our combined skills in database management, software development, and user experience design, we aim to provide hospitals with a reliable, efficient, and user-friendly solution.
          </p>
          <br />
          <h3>Nisha Shetty: 22108A0027</h3>
          <h3>Ojasvi Doye: 22108B0070</h3>
        </div>
      </div>
    </>
  );
};

export default Biography;
