import React from "react";

import classes from "./HonourMessage.module.css";

const HonourMessage = ({ name, positon, speech,img}) => {
  return (
    <>
      <div className={classes.honourMessage}>
        <img className={classes.img} src={img} alt="" />
      </div>
      <div className={classes.message_box}>
        <h4>{name}</h4>
        <h2>{positon}</h2>
        <h2>Welcome Message</h2>
        <p>{speech}</p>
      </div>
    </>
  );
};

export default HonourMessage;
