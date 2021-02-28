import React from "react";

import classes from "./LatestNews.module.css";

const LatestNews = ({ heading, news, img }) => {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-2 col-10 mx-auto ">
            <div className="img">
              <img className={classes.img} src={img} alt="" />
            </div>
          </div>

          <div className="col-md-8 col-10 mx-auto">
            <h5 className={classes.heading}>{heading}</h5>
            <p className={classes.bref_news}>{news}</p>

            <button className={classes.btn}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
