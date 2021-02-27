import React from "react";

import classes from "./Events.module.css";

const Events = ({img,date,topic}) => {
  return (
    <>
      <div className={classes.event}>
        <img className={classes.img} src={img} alt="" />
        <h4 className={classes.date}>{date}</h4><br/>
        <a className = {classes.topic} href="/">{topic}</a>
      </div>
    </>
  );
};

export default Events;
