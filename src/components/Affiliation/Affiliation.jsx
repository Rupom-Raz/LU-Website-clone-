import React from "react";
import classes from "./Affiliation.module.css";
import Affiliation1 from "../assets/asset 19.png";
import Affiliation2 from "../assets/asset 20.png";
import Affiliation3 from "../assets/asset 21.jpeg";
import Affiliation4 from "../assets/asset 22.gif";
import Affiliation5 from "../assets/asset 23.png";
import Affiliation6 from "../assets/asset 24.png";
import Affiliation7 from "../assets/asset 25.png";
import Affiliation8 from "../assets/asset 26.jpeg";
import Affiliation9 from "../assets/asset 27.png";
import Affiliation10 from "../assets/asset 28.jpeg";
import Affiliation11 from "../assets/asset 29.jpeg";
import Affiliation12 from "../assets/asset 30.gif";

const Affiliation = () => {
  return (
    <>
      <div className="container">
        <h4 className={classes.text}>Affliations</h4>
        <div className="row">
          <div className={classes.affiliate_section}>
            <div className="col-md-12 responsive ">
              <div className="col-md-2 col-12 ">
                <img className = {classes.img} src={Affiliation1} alt="" />
              </div>
              <div className="col-md-2 col-12 ">
                <img className = {classes.img} src={Affiliation2} alt="" />
              </div>
              <div className="col-md-2 col-12">
                <img className = {classes.img} src={Affiliation3} width  = "150px" alt="" />
              </div>
              <div className="col-md-2 col-12">
                <img className = {classes.img} src={Affiliation4} alt="" />
              </div>
              <div className="col-md-2 col-12">
                <img className = {classes.img} src={Affiliation5} alt="" />
              </div>
              <div className="col-md-2 col-12">
                <img className = {classes.img} src={Affiliation6} alt="" />
              </div>
            </div>

            <div className="col-md-12 responsive ">
                <div className="col-md-2 col-12">
                    <img className = {classes.img} src={Affiliation7}  width = "158px" alt=""/>
                </div>
                <div className="col-md-2 col-12">
                    <img className = {classes.img} src={Affiliation8} alt=""/>
                </div>
                <div className="col-md-2 col-12">
                    <img className = {classes.img} src={Affiliation9}   width = "150px" alt=""/>
                </div>
                <div className="col-md-2 col-12">
                    <img className = {classes.img} src={Affiliation10} alt=""/>
                </div>
                <div className="col-md-2 col-12">
                    <img className = {classes.img} src={Affiliation11} width = "150px" alt=""/>
                </div>
                <div className="col-md-2 col-12">
                    <img className = {classes.img} src={Affiliation12} alt=""/>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliation;
