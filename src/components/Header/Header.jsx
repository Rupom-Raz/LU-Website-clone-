import React from "react";
import classes from "./Header.module.css";
import "../../App.css";
import logo from "../assets/asset 0.png";
import Name from "../assets/asset 2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Header section start here */}
      <section className={classes.header}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 col-10 mt-2 ">
              <div className="logo">
                <Link to = "/">
                  <img className={classes.logo} src={logo} alt="" />
                  <img className={classes.name} src={Name} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header section end here */}
    </>
  );
};

export default Navbar;
