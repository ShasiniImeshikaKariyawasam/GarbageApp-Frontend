import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
    render() {
        return (
            <div>
            <div>
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section className="hero-section" id="hero">
    <div className="wave">
      <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
            <path d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z" id="Path" />
          </g>
        </g>
      </svg>
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 hero-text-image">
          <div className="row">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 data-aos="fade-right">GARAGE  APPLICATION</h1>
              <p className="mb-5" data-aos="fade-right" data-aos-delay={100}>    </p>
              <div>
              <Link to="/register"  className="btn btn-outline-white mx-3" >
                Register
              </Link>
              <Link to="/login" className="btn btn-outline-white" >
                Login
              </Link>
              </div>
            </div>
            {/* <div className="col-lg-4 iphone-wrap">
              <img src="assets/img/phone_1.png" alt="Image" className="phone-1" data-aos="fade-right" />
              <img src="assets/img/phone_2.png" alt="Image" className="phone-2" data-aos="fade-right" data-aos-delay={200} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
</div>


            </div>
        )
    }
}
