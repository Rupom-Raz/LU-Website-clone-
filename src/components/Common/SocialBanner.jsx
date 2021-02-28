import React from "react";

import classes from "../Common/SocialBanner.module.css";

const SocialBanner = ({ heading, link, img, height, width, subheading }) => {
  return (
    <>
      <div className="social_banner mt-3">
        <div className={classes.banner_section}>
          <h4 className={classes.banner_heading}>{heading}</h4>
          <a className="_3-8_ lfloat" href={link}>
            <img src={img} height={height} width={width} alt="" />
          </a>
          <p>
            <strong className={classes.sub_heading}>{subheading}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialBanner;
