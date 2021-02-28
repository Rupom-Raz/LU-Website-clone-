import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import {  RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <section className={classes.navbar}>
        <div className="container-fluid ">
          <div className="row">
            <div className="  col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    data-target="/navbarSupportedContent"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          exact
                          activeClassName="menu_active"
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/About"
                        >
                          About Us{" "}
                          <RiArrowDownSLine className={classes.ArrowDown} />
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/Addmisson"
                        >
                          Addmisson{" "}
                          <RiArrowDownSLine className={classes.ArrowDown} />
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/Iqac"
                        >
                          IQAC
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/FacultyMembers"
                        >
                          Faculty Members{" "}
                          <RiArrowDownSLine className={classes.ArrowDown} />
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/Faculty"
                        >
                          Faculty
                          <RiArrowDownSLine className={classes.ArrowDown} />
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/StudentPortal"
                        >
                          Student Portal
                          <RiArrowDownSLine className={classes.ArrowDown} />
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/Library"
                        >
                          Library
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/Login"
                        >
                          Login
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
