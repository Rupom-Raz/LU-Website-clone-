import React from "react";
import { Link } from "react-router-dom";
import mojib from "../assets/asset 14.jpeg";
import FacebookBanner from "../assets/asset 4.jpeg";
import InstaBanner from "../assets/insta.jpg";
import Banner from "../Common/Banner";
import SocialBanner from "../Common/SocialBanner";
import Footer from "../Footer/Footer";
import classes from "./Library.module.css";
const Library = () => {
  return (
    <>
      <section className={classes.libraby_section}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12 mt-2">
              <div className={classes.library}>
                <h1 className={classes.heading}>Library</h1>

                <Link to="/" className={classes.link}>
                  {" "}
                  <span>Library.lus.ac.bd</span>
                </Link>

                <h3 className={classes.sub_heading}>Resource</h3>

                <h4 className={classes.resource_data}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                  <a
                    href="https://www.research4life.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={classes.resource_link}>E-Journal</span>
                  </a>
                  &nbsp;(User Name: bgdR4L046, Password: t10005D)
                </h4>

                <h4 className={classes.resource_data}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                  <a
                    href="https://www.wileyindia.com/Wiley_Online_Resources/UGC%20Bangladesh/UGC%20Bangladesh.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={classes.resource_link}>E-Books</span>
                  </a>
                </h4>

                <h4 className={classes.resource_data}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                  <a
                    href="http://202.5.49.103/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={classes.resource_link}> OPAC</span>
                  </a>
                  (For Library Search)
                </h4>

                <h4 className={classes.resource_data}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                  <a href="https://www.lus.ac.bd/e-paper/">
                    <span className={classes.resource_link}> E-News Paper</span>
                  </a>
                </h4>

                <h3 className={classes.sub_heading}>From</h3>

                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <h4 className={classes.form_name}>
                          Library Membership form
                        </h4>
                      </td>
                      <td>
                        <Link to="/" className={classes.download}>
                          Download
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <h4 className={classes.form_name}>
                          Digital ID card form
                        </h4>
                      </td>
                      <td>
                        <Link to="/" className={classes.download}>
                          Download
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <h4 className={classes.form_name}>
                          Form for Book Issue to the Part-time Gust Teacher
                        </h4>
                      </td>
                      <td>
                        <Link to="/" className={classes.download}>
                          Download
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <h4 className={classes.form_name}>
                          Library Membership form
                        </h4>
                      </td>
                      <td>
                        <Link to="/" className={classes.download}>
                          Download
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
      <Footer />
    </>
  );
};

export default Library;
