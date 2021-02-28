import React from "react";
import {
  FaBook,
  FaFlask,
  FaLayerGroup,
  FaRegBuilding,
  FaRegMoneyBillAlt,
  FaWifi,
} from "react-icons/fa";
import Affiliation from "../Affiliation/Affiliation";
import Bonomali from "../assets/asset 10.jpeg";
import NewsPic1 from "../assets/asset 11.jpeg";
import NewsPic2 from "../assets/asset 12.jpeg";
import NewsPic3 from "../assets/asset 13.jpeg";
import mojib from "../assets/asset 14.jpeg";
import Eventespic1 from "../assets/asset 16.jpeg";
import Eventspic2 from "../assets/asset 17.png";
import eventespic3 from "../assets/asset 18.jpeg";
import FacebookBanner from "../assets/asset 4.jpeg";
import pic2 from "../assets/asset 5.jpeg";
import pic3 from "../assets/asset 6.jpeg";
import Ragib from "../assets/asset 9.jpeg";
import InstaBanner from "../assets/insta.jpg";
import Banner from "../Common/Banner";
import Events from "../Common/Events";
import Facilities from "../Common/Facilities";
import HonourMessage from "../Common/HonourMessage";
import LatestNews from "../Common/LatestNews";
import SocialBanner from "../Common/SocialBanner";
import Footer from "../Footer/Footer";
import Location from "../Location/Location";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={classes.section}>
        <div className="container ">
          <div className="row my-5">
            <div className="col-md-8 col-12 mt-2">
              {/* ************************* Slider Start Here **************************** */}
              
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className={classes.slider_pic}
                        src={FacebookBanner}
                        alt=""
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className={classes.slider_pic}
                        src={pic2}
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          Some representative placeholder content for the second
                          slide.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className={classes.slider_pic}
                        src={pic3}
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              

              {/*************************** Slider end here *****************************/}


              {/*********************** Honurable message start here ***********************/}
              <section className="honourmessage">
                <div className="row my-5">
                  <div className="col-md-6 col-12 mx-auto">
                    <HonourMessage
                      img={Ragib}
                      name="Danobir Dr. Syed Ragib Ali"
                      position="Founder & Chairman, Board of Trustees, Leading University, Sylhet"
                      speech="Leading University is the first private university in Sylhet. Its a reality of my deepest dream from decades. Establishment of Leading University is the greatest work of many other deeds in my life that I could do from the mercy of Allah. To deliver the light of modern higher education in every pace of life, I establish the Leading University in 2001 by means of nominal fee structure. Today Leading University earned the name and fame not only in Sylhet but also in nationwide with the greatest support and love from the people of the country.

                      Leading University is a non-profit educational institution. So far I am concerned all of the institutions including Leading University are doing very well and carry out their academic activities to the highest degree of perfection and with good reputation in Bangladesh. By the leniency of Allah I also have dream to establish Science & Technology University, more Medical Colleges as well as some schools and colleges in remote area of the country.
                      
                      I hope these institutions would go further to the international level in the days to come.
                      
                      Danobir Dr. Syed Ragib Ali"
                    />
                  </div>

                  <div className="col-md-6 col-12 mx-auto">
                    <HonourMessage
                      img={Bonomali}
                      name="Mr. Banamali Bhowmick"
                      position="Vice Chancellor (Acting)"
                      speech="Welcome to Leading University, a community that cherishes excellence and embraces change.

                      Here you will find a place determined to make a positive impact on the world. You get to become a part of an institution that cares for you. Our commitment to equality and diversity is unparalleled.

                      Since its foundation, Leading University has performed exceptionally in delivering comprehensive education in the northeast region of Bangladesh. Our faculties and staff will provide you the student learning experience you deserve.

                      Here at Leading University, we give our best to help you achieve your full potential. I hope that you will join us as we continue our journey to eminence.

                      Wishing you a successful academic life,
                      Banamali Bhowmick
                      Vice-Chancellor (Acting)
                      Leading University, Sylhet"
                    />
                  </div>
                </div>
              </section>

              {/*******************  Honurable message end here ************************************/}

              {/************************* Latest News start here *********************************/}
              <div className="text">
                <h5 className={classes.text}>Latest News</h5>
              </div>
              <section className={classes.latestNews}>
                <div className="news py-3">
                  <LatestNews
                    heading="শহিদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবসে লিডিং ইউনিভার্সিটির শ্রদ্ধাঞ্জলি ও আলোচনা"
                    news="মহান শহিদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবসে ভাষা শহিদদের প্রতি শ্রদ্ধা জ্ঞাপন করেছেন লিডিং ইউনিভার্সিটি পরিবার। ২১শে ফেব্রুয়ারি ২০২১ সকাল ১১:০০টায় লিডিং ইউনিভার্সিটির প্রতিষ্ঠাতা ও বোর্ড অব ট্রাস্টিজের চেয়ারম্যান দানবীর ড. সৈয়দ রাগীব আলী বিশ্ববিদ্যালয়ের প্রাঙ্গনে নির্মিত শহিদ মিনারে পুষ্পস্তপক অর্পণ করেন। এসময় বিশ্ববিদ্যালয়ের কোষাধ‍্যক্ষ ও ভারপ্রাপ্ত উপাচার্য  বনমালী ভৌমিক, ট্রাস্টি বোর্ডের সদস্য সৈয়দ আব্দুল"
                    img={NewsPic1}
                  />
                  <LatestNews
                    heading="লিডিং ইউনিভার্সিটিতে কবিতা পাঠ ও সাংস্কৃতিক সন্ধ‍্যা অনুষ্ঠিত"
                    news="সিলেটের প্রথম বেসরকারি বিশ্ববিদ্যালয় লিডিং ইউনিভার্সিটিতে কবিতা পাঠ ও সাংস্কৃতিক সন্ধ‍্যা অনুষ্ঠিত হয়েছে। শনিবার বিকাল ৫টায় ৫২টি ভাষায় ‘মা’ শব্দ লিখা শহিদ মিনার প্রাঙ্গণে লিডিং ইউনিভার্সিটির প্রতিষ্ঠাতা ও বোর্ড অব ট্রাস্টিজের চেয়ারম্যান দানবীর ড. সৈয়দ রাগীব আলীর সভাপতিত্বে এ অনুষ্ঠানের আয়োজন করা হয়। এতে লিডিং ইউনিভার্সিটির ট্রেজারার ও ভারপ্রাপ্ত উপাচার্য বনমালী ভৌমিক, বোর্ড অব ট্রাস্টিজের"
                    img={NewsPic2}
                  />

                  <LatestNews
                    heading="প্রফেসর ড. কাজী আজিজুল মাওলা লিডিং ইউনিভার্সিটির নতুন উপাচার্য"
                    news="প্রফেসর ড. কাজী আজিজুল মাওলাকে লিডিং ইউনিভার্সিটির নতুন উপাচার্য হিসেবে বরণ করে নেওয়া হয়েছে। রবিবার সকাল ১১:৩০টায় বিশ্ববিদ্যালয়ের বোর্ড রুমে আয়োজিত এক মনোরম পরিবেশের মধ্য দিয়ে নবাগত ভিসিকে স্বাগত জানান লিডিং ইউনিভার্সিটির প্রতিষ্ঠাতা ও বোর্ড ট্রাস্টিজ এর-চেয়ারম্যান দানবীর ড. সৈয়দ রাগীব আলী। অনুষ্ঠানে বিশ্ববিদ্যালয়ের ট্রেজারার এবং সাবেক ভারপ্রাপ্ত উপাচার্য বনমালী ভৌমিক, বোর্ড অব ট্রাস্টিজের সদস্য"
                    img={NewsPic3}
                  />
                  <button className={classes.btn}>News Archive</button>
                </div>
              </section>

              {/********************************** Latest News end here *****************************/}
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
              className = {classes.facebookbanner}
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

      {/*************************** Events part start here ****************************/}

      <div className="container ">
        <h4 className={classes.event_text}>Events</h4>
        <div className="row  ">
          <div className="col-md-4 col-12 d-flex mt-4  ">
            <Events 
            
              img={Eventespic1}
              topic="Webinar on Research to Start – Why and How?"
              date="25th January 2021"
            />
            <Events
              img={Eventspic2}
              topic="BDApps Engagement Workshop for CSE Students"
              date="20th September 2020"
            />
            <Events
              img={eventespic3}
              topic="Webinar on The Importance of Building Data Science Competence in Developing Countries"
              date="30th August 2020"
            />
          </div>
        </div>
      </div>

      {/*************************** Events part end here ****************************/}

      {/********************** Campus facilities start here ******************************/}

      <div className="container my-5">
        <h4 className={classes.text}>Campus Facilities</h4>
        <div className="row">
          <div className="row gy-4">
            <Facilities
              icon={<FaWifi />}
              text="Free Wi-Fi Access"
              para="Students are given access to high speed internet all over the campus through wifi."
            />
            <Facilities
              icon={<FaFlask />}
              text="Highly Equipped Labs"
              para="There are labs equipped with modern instruments in every relevant department."
            />
            <Facilities
              icon={<FaLayerGroup />}
              text="Extra Curricular Activities"
              para="Students can participate in various extra curricular activities through various clubs"
            />
            <Facilities
              icon={<FaBook />}
              text="Rich Library"
              para="The university has a fully air-conditioned and computerized rich library"
            />
            <Facilities
              icon={<FaRegBuilding />}
              text="AC Class Rooms"
              para="Classrooms are air conditioned, so the students can study in comfort."
            />
            <Facilities
              icon={<FaRegMoneyBillAlt />}
              text="Up to 75% Waiver"
              para="Meritorious students are rewarded with up to 75% waiver based on several criterias."
            />
          </div>
        </div>
      </div>

      {/********************** Campus facilities end here ******************************/}

      {/* Afiliation start here */}

      <section className="my-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-10 mx-auto">
              <Affiliation />
            </div>
          </div>
        </div>
      </section>

      {/* Afiliation end here */}

      {/************************************ Campus Location Start Here *****************************/}
      <section className="my-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
              <Location />
            </div>
          </div>
        </div>
      </section>

      {/************************************ Campus Location End Here *****************************/}

      {/******************************** Footer Section start here **************************/}

      <div className="container-fluid">
        <div className="row">
          <Footer />
        </div>
      </div>

      {/******************************** Footer Section end here **************************/}
    </>
  );
};

export default Home;
