import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../img/png/Logo.png";
import { Link } from "react-router-dom";
import Button from "./button";
import Hero from "../img/png/hero_mobile.png";
import Gplay from "../img/png/google play.png";
import App from "../img/png/app store.png";
import Worker_img from "../img/png/worker.png";
import CountUp from "react-countup";
import { data } from "./helper";
import Slider from "react-slick";
import Office from "../img/png/office.png";
import Cardicon from "../img/png/card icon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Woman from "../img/png/woman.png";
import Hero_bg from '../img/png/hero_bg.png'
import Logo2 from "../img/png/Logo2.png";
import Earth from "../img/png/earth holders.png";
import Facebook from "../img/png/facebook.png";
import Instagram from "../img/png/instagram.png";
import In from "../img/png/in.png";

export default function HeroPage() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    let body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <header className="position-relative ">
        {/* <img
          className="position-absolute position-relative  bottom-0 z_n1"
          src={Hero_bg}
          alt=""
        /> */}

        <div className="container custom_container py-3">
          <nav className="d-flex align-items-center justify-content-between">
            <img src={Logo} alt="Logo" className="logo" />
            <ul
              className={`d-flex align-items-center gap-5 flex-column flex-lg-row nav_links ${
                navOpen ? "show" : ""
              }`}
            >
              <li>
                <Link to="/" className="nav_hover fw-normal fs_sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav_hover fw-normal fs_sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="nav_hover fw-normal fs_sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="nav_hover fw-normal fs_sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav_hover fw-normal fs_sm">
                  Contact Us
                </Link>
              </li>
              <div className="d-flex d-lg-none">
                <Button commonBtn="Book Now" />
              </div>
            </ul>

            <div className="d-none d-lg-flex">
              <Button commonBtn="Book Now" />
            </div>
            <div>
              <button className="d-lg-none menu_btn" onClick={toggleNav}>
                {navOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </nav>
        </div>
        <section>
          <div className="container custom_container mt-1">
            <div className="row p-0 align-items-center">
              <div className="col-12 col-lg-6 p-lg-0">
                <p className="fs_xl fw-bold lh_66">
                  Your <span className="color_green">One-Stop</span> Solution
                  for Services
                </p>
                <p className="fs_sm fw-normal opacity-75 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris efficitur feugiat ultrices. Vivamus aliquet consequat
                  tortor quis posuere. Nullam molestie vulputate dolor vel
                  ultrices. Etiam ac justo arcu.
                </p>
                <div className="mt_42">
                  <Button commonBtn="Find Out More" />
                </div>
              </div>
              <div
                className="col-10 col-sm-8 m-auto col-lg-6 p-lg-0 mt-4"
                data-aos="zoom-in-up"
              >
                <img className="w_85" src={Hero} alt="Hero" />
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container custom_container">
            <div className="row justify-content-between counter_box">
              <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start border_right">
                <div className="ms-2">
                  <CountUp start={0} end={8.9} decimals={1} suffix="%">
                    {({ countUpRef, start }) => (
                      <div>
                        <span
                          onClick={start}
                          className="fs_xlg color_green fw-medium"
                          ref={countUpRef}
                        />
                      </div>
                    )}
                  </CountUp>
                </div>
                <p className="fs_sm fw-normal">Active Clients</p>
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
                <CountUp start={0} end={150} decimals={0} suffix="K+">
                  {({ countUpRef, start }) => (
                    <div>
                      <span
                        onClick={start}
                        className="fs_xlg color_green fw-medium"
                        ref={countUpRef}
                      />
                    </div>
                  )}
                </CountUp>
                <p className="fs_sm fw-normal">Reviews</p>
              </div>
              <div className="col-12 col-md-4 text-center text-md-end">
                <CountUp start={0} end={10} decimals={0} suffix="M+">
                  {({ countUpRef, start }) => (
                    <div>
                      <span
                        ref={countUpRef}
                        onClick={start}
                        className="fs_xlg color_green fw-medium"
                      />
                    </div>
                  )}
                </CountUp>
                <p className="fs_sm fw-normal me-md-3 ms-md-5 text-md-end">
                  Downloads
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        {/* section 1 */}
        <section className="custom_container container mt_152">
          <div className="row align-items-center">
            <div className=" col-10 m-auto col-lg-6 m_auto">
              <img className="w_98" src={Worker_img} alt="Worker" />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 mt-4 m_auto   ">
              <p className="fw-medium fs_xlg mt-4">
                Unique Selling <span className="color_green">Proposition</span>
              </p>
              <p className="fs_sm fw-medium mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu purus eleifend, sollicitudin tortor id, eleifend ante. Nam
                tincidunt ipsum pellentesque viverra facilisis. Suspendisse id
                lacus et mauris luctus lobortis. Curabitur libero nibh, dictum
                eu neque et, pharetra placerat diam. Ut vulputate magna et felis
                sodales facilisis. Praesent est arcu, egestas blandit tincidunt
                ac, gravida et quam.
              </p>
              <button className="Read fw-medium color_green fs_md  mt_42 ">
                Read More
              </button>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section className="section_bg mt_152">
          <div className="container">
            <p className="fw-medium fs_xlg text-center">
              Our Range of <span className="color_green">Services</span>
            </p>
            <div className="row mt-4 ">
              {data.Card.map((item, i) => (
                <div className=" col-md-6 col-lg-4 mt-4" key={i}>
                  <div
                    className="Services_card text-center h-100"
                    // data-aos="fade-up"
                    // data-aos-anchor-placement="top-center"
                  >
                    <img src={item.img} alt="" />
                    <p className="fw-medium fs_lg mt-3">{item.name}</p>
                    <p className="fw-normal fs_sm mt-2 lh_24">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt_42">
              <Button commonBtn="View All" />
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section className="mt_152 pb-5">
          <div className="container custom_container pb-5">
            <div className="row pb-5">
              <div className=" col-12 col-md-6 mb-3">
                <p className="fs_xlg fw-medium lh_52">
                  Why Choose{" "}
                  <span className="color_green"> Namo Prime services</span>
                </p>
              </div>
              <div className=" col-12  col-md-6 p-md-0 mb-5">
                <p className="fs_sm fw-normal ">
                  At Namo Prime, we pride ourselves on delivering unparalleled
                  services that go beyond the ordinary. Choosing us means
                  choosing excellence, reliability, and a commitment to your
                  satisfaction
                </p>
              </div>
              {data.Card2.map((item, i) => {
                return (
                  <>
                    <div
                      className="col-12 col-md-6 mt-4"
                      key={i}
                      // data-aos="fade-up"
                      // data-aos-anchor-placement="top-center"
                    >
                      <div
                        className="d-flex align-items-start card2"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                      >
                        <img src={item.img} alt="" />
                        <div className="ms-4">
                          <p className="fs_lg fw-medium">{item.heding}</p>
                          <p className="fs_sm fw-normal mt-2">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section className="section_bg mt-5 pt-5 ">
          <div className="container custom_container pb-5">
            <p className="fw-medium fs_xlg text-center">
              Our <span className="color_green">Clients</span>Say
            </p>
            <Slider {...settings}>
              {data.Card3.map((item, i) => (
                <div className="px-2 mt-4">
                  {" "}
                  <div key={i} className="slider_card mt_52 h-100">
                    <div className="d-flex justify-content-between align-items-center ">
                      <div className="d-flex align-items-center">
                        <span>
                          <img src={item.img} alt="" />
                        </span>
                        <p className="mb-1 ms-3 fw-medium fs_lg">
                          {" "}
                          {item.name}
                        </p>
                      </div>
                      <div>
                        <img src={Cardicon} alt="" />
                      </div>
                    </div>
                    <p className="mt-2 fs_sm fw-normal ">{item.title}</p>
                    <div className="mt-2">
                      <Box
                        sx={{
                          "& > legend": { mt: 6 },
                        }}
                      >
                        <Rating
                          name="simple-controlled"
                          // value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                    </div>
                  </div>
                            
                </div>
              ))}
            </Slider>
          </div>
        </section>
        {/* section 5 */}
        <section className="mt-5 pt-5 pb-lg-5">
          <div className="container custom_container pb-5">
            <p className="fw-medium fs_xlg text-center">Our Blog</p>
            <div className="row mt-5 pt-1 pb-2">
              <div className=" col-12 col-sm-10 col-lg-8 m_auto col-xl-6">
                <div>
                  <img className="w-100" src={Office} alt="office" />
                  <p className="fs_xsm fw-normal color_green mt-4">
                    27 Jan 2023
                  </p>
                  <p className="fs_lg fw-medium text-black mt-1">
                    Nullam viverra nunc sit amet libero rutrum,
                  </p>
                  <p className="color_gray fs_sm fw-normal mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac nibh in ex consectetur pellentesque ac porttitor
                    ipsum. Ut iaculis lectus quis feugiat rutrum. Sed non
                    venenatis est. Praesent tortor leo,
                  </p>
                  <button className="Read fw-medium color_green fs_md mt-4">
                    Read More
                  </button>
                </div>
              </div>
              <div className=" col-12 col-sm-10 col-lg-8 m_auto col-xl-6">
                <div className="row flex-column pb-5 mt-5 mt-lg-0">
                  <div className="col-12 col-md-12 m_auto mt-3 mt-xl-0 ">
                    <div className="d-flex flex-column flex-md-row ">
                      <img src={Woman} alt="" />
                      <div className="ms-4">
                        <p className="fs_xsm fw-normal color_green mt-4">
                          19 Jan 2022
                        </p>
                        <p className="fs_20 fw-medium text-black mt-1">
                          Nullam viverra nunc sit amet libero rutrum,
                        </p>
                        <p className="color_gray fs_sm fw-normal mt-2">
                          Linear helps streamline software projects, sprints,
                          tasks, and bug tracking. Here’s how to get...
                        </p>
                        <button className=" border_none fw-medium color_green fs_md mt-4">
                          Read more...
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 m_auto mt-3">
                    <div className="d-flex flex-column flex-md-row">
                      <img src={Woman} alt="" />
                      <div className="ms-4">
                        <p className="fs_xsm fw-normal color_green mt-4">
                          19 Jan 2022
                        </p>
                        <p className="fs_20 fw-medium text-black mt-1">
                          Nullam viverra nunc sit amet libero rutrum,
                        </p>
                        <p className="color_gray fs_sm fw-normal mt-2">
                          Linear helps streamline software projects, sprints,
                          tasks, and bug tracking. Here’s how to get...
                        </p>
                        <button className=" border_none fw-medium color_green fs_md mt-4">
                          Read more...
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 6 */}
        <section className="section_bg">
          <div className="container custom_container overflow-x-hidden">
            <div className="row align-items-center">
              <div className="col-10 m_auto col-lg-6">
                <p className="fs_xlg fw-medium"> Contact Us</p>
                <form>
                  <div className="d-flex justify-content-between flex-column flex-sm-row">
                    <div>
                      <label className="fs_sm fw-normal">First Name</label>{" "}
                      <br />
                      <input
                        className=" mt-2 w_267 "
                        type="text"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="fs_sm fw-normal">Last Name</label>{" "}
                      <br />
                      <input
                        className=" mt-2 w_267"
                        type="text"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3 flex-column flex-sm-row">
                    <div>
                      <label className="fs_sm fw-normal">Email Address*</label>{" "}
                      <br />
                      <input
                        className=" mt-2 w_267"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="fs_sm fw-normal">Phone Number</label>{" "}
                      <br />
                      <input
                        className=" mt-2 w_267"
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <label className="fs_sm fw-normal mt-3">Message</label> <br />
                  <textarea className="mt-2"></textarea>
                  <div className="mt_42">
                    <Button commonBtn="Submit" />
                  </div>
                </form>
              </div>
              <div
                className=" col-10 m_auto mt-5 mt-lg-0 col-lg-6"
                data-aos="fade-left"
              >
                <div>
                  <img className="w-100" src={Earth} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 7 */}
        <section className="translate_y_50 mt-5 mt-lg-0">
          <div className="container custom_container">
            <div className="row">
              <div className="col-12  text-center">
                <div className="bg_green footer_box">
                  <p className="fs_xlg fw-medium lh-1 text-white">
                    Enhance Your Experience <br /> With Our Mobile App
                  </p>
                  <div className="mt-4">
                    <a className="me-4" href="#">
                      <img className="w_100" src={Gplay} alt="" />
                    </a>
                    <a href="#">
                      <img className="w_100" src={App} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer_bg mt-4 mt-md-0">
        <div className="container custom_container mt-5 pt-5">
          <div className="text-center mt-5 pt-5">
            <button
              className="bg-tran
            sparent border_none"
            >
              {" "}
              <img width={210} src={Logo2} alt="Logo" className="logo" />
            </button>
            <p className="fs_sm fw-normal  w_lg_50  m-auto mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu enim nibh. Aliquam tincidunt leo non massa facilisis
            </p>
            <ul className="d-flex align-items-center justify-content-center gap-4 gap-lg-5 mt-3 flex-wrap">
              <li>
                <Link to="/" className="nav_hover fw-normal fs_sm text_white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav_hover fw-normal fs_sm text_white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="nav_hover fw-normal fs_sm text_white"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="nav_hover fw-normal fs_sm text_white"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="nav_hover fw-normal fs_sm text_white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className=" mt-5 mt-lg-3 ">
              <Link
                to="https://www.instagram.com/"
                className="nav_hover fw-normal fs_sm Links"
              >
                <img src={Instagram} alt="" />
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="nav_hover fw-normal fs_sm ms-3 Links"
              >
                <img src={Facebook} alt="" />
              </Link>
              <Link
                to="https://in.linkedin.com/"
                className="nav_hover fw-normal fs_sm ms-3 Links"
              >
                <img src={In} alt="" />
              </Link>
            </div>
          </div>
          <hr />
          <p className="fs_xsm fw-normal opacity_80 text-center mt-4">
            ©2023 Namo Prime Services, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
