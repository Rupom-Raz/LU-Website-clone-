import React from "react";
import classes from "./Facilities.module.css";


const Facilities = ({icon, text, para}) => {
    
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div className={classes.facilities}>
          <i className = {classes.icon}>{icon}</i>
          <h3 className={classes.facilities_text}>{text}</h3>
          
          <p className={classes.facilities_para}>{para}</p>
        </div>
      </div>
    </>
  );
};

export default Facilities;
