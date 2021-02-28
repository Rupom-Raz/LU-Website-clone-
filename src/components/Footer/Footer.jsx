import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={classes.footer_section}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className={classes.text}>Contact</h4>
              <p className={classes.address}>Phone:01752715535</p>
              <p className={classes.address}>Email:rupomk70@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className = {classes.developer}>
          <div className="container">
              <div className="row">
                  <div className="col-md-10 mx-auto">
                      <p className = {classes.dev_name} >Copyright 2021 Leading University, all rights reserved. Developed by <span className = {classes.name_style}>Rupom's Creation.</span></p>
                      <span className = {classes.copyright}>This site is maintained by CSE & IT Department.</span>

                  </div>
              </div>
          </div>

      </section>
    </>
  );
};

export default Footer;
