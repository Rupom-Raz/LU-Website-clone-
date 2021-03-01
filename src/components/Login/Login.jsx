import React from "react";
import mojib from "../assets/asset 14.jpeg";
import FacebookBanner from "../assets/asset 4.jpeg";
import InstaBanner from "../assets/insta.jpg";
import Banner from "../Common/Banner";
import SocialBanner from "../Common/SocialBanner";
import Footer from "../Footer/Footer";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <>
      <section className={classes.login_section}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12 mt-2">
              <div className={classes.login_box}>
                <h1 className={classes.text}>Login</h1>
                <form className={classes.form} onSubmit>
                  <div className="information ">
                    <label className={classes.label} htmlFor="">
                      Student ID or Username
                    </label>
                    <br />
                    <input
                      className={classes.input}
                      type="text"
                      name="name"
                      id=""
                    />
                    <br />
                    <label className={classes.label} htmlFor="">
                      Password
                    </label>
                    <br />
                    <input
                      className={classes.input}
                      type="password"
                      name="passeword"
                      id=""
                    />
                  </div>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className={classes.checkbox_text} for="exampleCheck1">
                    Remember Me
                  </label>
                  <br />
                  <button className={classes.btn}>Log in</button><br/>
                  <a className = {classes.a_tag} href="/">Lost Password </a> | <a className ={classes.a_tag} href="/">Register</a>
                
                  
                </form>
              </div>

              {/* Login will be here */}
            </div>
            <div className="col-md-4 col-12 mt-2 ">
              <div className="mojib_pic ">
                <img src={mojib} alt="" />
              </div>

              <div className={classes.addmisson_banner}>
                <p className={classes.addmisson_text}>
                  addmisson is going on spring 2021
                </p>
              </div>

              <Banner heading="Forms & Dolnload" btn="Click Here" />
              <Banner heading="Contact" btn="Click Here" />

              {/********************* Notice board start here ******************/}

              <div className={classes.notice_board}>
                <div className={classes.notice_heading}>
                  <h4>Notice Board</h4>
                  <div className="event_section">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <span className="badge pull-left">
                          18
                          <br />
                          Feb
                        </span>
                        <p>
                          <a href="https://www.lus.ac.bd/notice/regarding-shaheed-day-and-international-mother-language-day/">
                            Regarding Shaheed Day and International Mother
                            Language Day
                          </a>
                        </p>
                      </li>
                      <li className="list-group-item">
                        <span className="badge pull-left">
                          18
                          <br />
                          Feb
                        </span>
                        <p>
                          <a href="https://www.lus.ac.bd/notice/regarding-kobita-sondha/">
                            Regarding Kobita Sondha
                          </a>
                        </p>
                      </li>
                      <li className="list-group-item">
                        <span className="badge pull-left">
                          17
                          <br />
                          Feb
                        </span>
                        <p>
                          <a href="https://www.lus.ac.bd/notice/regarding-course-registration-spring-2021-2/">
                            Regarding Course Registration (Spring-2021)
                          </a>
                        </p>
                      </li>
                      <li className="list-group-item">
                        <span className="badge pull-left">
                          15
                          <br />
                          Feb
                        </span>
                        <p>
                          <a href="https://www.lus.ac.bd/notice/regarding-saraswati-puja-2021/">
                            Regarding Saraswati Puja 2021
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/**********************  Notice Borad end here ************************/}

              {/************ Social Banner start here *******************************/}
              <SocialBanner
                className={classes.facebookbanner}
                heading="Facebook"
                link="https://www.facebook.com/leadinguniversity2001/"
                img={FacebookBanner}
                height="130"
                width="320"
              />
              <SocialBanner
                heading="Instagram"
                link="https://www.instagram.com/leadinguniversity/?hl=en&fbclid=IwAR2DYPfLjCdEPDsq2HzujkHRl-5l_E3U0R_VRZACYA5cuQk5OSINCpBqDss"
                img={InstaBanner}
                height="73"
                width="74"
                subheading="Leading University,Sylhet"
              />
              {/************ Social Banner End here *******************************/}

              {/********************** Department details start here ******************/}

              <section className={classes.department}>
                <div className="department">
                  <a href="/">Department Of Bussiness Administration</a>
                  <br />
                  <a href="/">Department Of CSE</a>
                  <br />
                  <a href="/">Department Of English</a>
                  <br />
                  <a href="/">Department Of Architecture</a>
                  <br />
                  <a href="/">Department Of Law</a>
                  <br />
                  <a href="/">Department Of Civil Engneering</a>
                  <br />
                  <a href="/">Department Of EEE</a>
                  <br />
                  <a href="/">Department Of Islamic Studies</a>
                  <br />
                  <a href="/">Department Of Public Health</a>
                  <br />
                  <a href="/">
                    Department Of Tourism and Hospitality Management
                  </a>
                </div>
              </section>
              {/********************** Department details End here ******************/}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Login;
