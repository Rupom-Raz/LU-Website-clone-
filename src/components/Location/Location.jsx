import React from "react";
import classes from "./Location.module.css";

const Location = () => {
  return (
    <>
      <div className="container">
        <h4 className={classes.text}>Campus Location</h4>
        <div className="row my-3">
          <div className={classes.campus_section}>
            <div className="col-md-12 col-10 ">
              <div className="map">
                <iframe
                  title="one"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8205810846875!2d91.80234941432026!3d24.869976751002508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751015addbec3b7%3A0x9e87b7be58b5f67e!2sLeading%20University!5e0!3m2!1sbn!2sbd!4v1614436046677!5m2!1sbn!2sbd"
                  width="1050"
                  height="460"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
