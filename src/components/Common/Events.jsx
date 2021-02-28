import React from "react";

import classes from "./Events.module.css";

const Events = ({ img, date, topic }) => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className=" col-md-10 col-12  responsive_events">
            <img className={classes.img} src={img} alt="" />
            <h4 className={classes.date}>{date}</h4>
            <br />
            <a className={classes.topic} href="/">
              {topic}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
