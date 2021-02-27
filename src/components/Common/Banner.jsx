import React from "react";
import classes from "./Banner.module.css";

const Banner = ({heading,btn}) => {
  return (
    <>
      <div className="banner mt-3">
      <div className={classes.forms_section}>
        <h4 className={classes.forms_heading}>{heading}</h4>
        <button className={classes.form_btn}>{btn}</button>
      </div>
      </div>
    </>
  );
};

export default Banner;
