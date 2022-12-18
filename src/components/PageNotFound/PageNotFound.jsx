/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";

import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="container">
      <h1>Sorry This Page is Not Found</h1>

      <iframe src="https://embed.lottiefiles.com/animation/98642" />

      <div className="button-container">
        <Link to="/">
          <button>Go back To Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
