import React, { useState } from "react";
import "./App.css";
import home from "./image/home-img.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  const [nav, setnav] = useState("navbar");

  function toggle() {
    if (nav === "navbar") {
      setnav("navbar active");
    }
    if (nav === "navbar active") {
      setnav("navbar");
    }
  }
  return (
    <div>
      <div className="App">
        <div>
          <header className="header">
            <div
              id="menu-btn"
              className="fas fa-bars"
              onClick={() => toggle()}
            />
            <a href="/" className="logo">
              {" "}
              <span>Auto</span>Cars
            </a>
            <nav className={nav}>
              <a href="/">home</a>

              <Link to="/Marketplace">
                <a>Marketplace</a>
              </Link>
              <a href="#services">services</a>
              <Link to="/tax">
                <a>Pay Tax</a>
              </Link>

              <Link to="/contact">
                <a>contact</a>
              </Link>
            </nav>
            <div id="login-btn">
              <button className="btn">login</button>
              <i className="far fa-user" />
            </div>
          </header>
          <div className="login-form-container">
            <span id="close-login-form" className="fas fa-times" />
            <form action>
              <h3>user login</h3>
              <input type="email" placeholder="email" className="box" />
              <input type="password" placeholder="password" className="box" />
              <p>
                {" "}
                forget your password <a href="#">click here</a>{" "}
              </p>
              <input type="submit" defaultValue="login" className="btn" />
              <p>or login with</p>
              <div className="buttons">
                <a href="#" className="btn">
                  {" "}
                  google{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  facebook{" "}
                </a>
              </div>
              <p>
                {" "}
                don't have an account <a href="#">create one</a>{" "}
              </p>
            </form>
          </div>
          <section className="home" id="home">
            <h3 data-speed={-2} className="home-parallax">
              find your car
            </h3>
            <img data-speed={5} className="home-parallax" src={home} alt="" />
            <a data-speed={7} href="#" className="btn home-parallax">
              explore cars
            </a>
          </section>
          <section className="icons-container">
            <div className="icons">
              <i className="fas fa-car" />
              <div className="content">
                <h3>4770+</h3>
                <p>cars sold</p>
              </div>
            </div>
            <div className="icons">
              <i className="fas fa-users" />
              <div className="content">
                <h3>320+</h3>
                <p>happy clients</p>
              </div>
            </div>
            <div className="icons">
              <i className="fas fa-car" />
              <div className="content">
                <h3>1500+</h3>
                <p> cars for Sale</p>
              </div>
            </div>
          </section>

          <section className="services" id="services">
            <h1 className="heading">
              {" "}
              our <span>services</span>{" "}
            </h1>
            <div className="box-container">
              <div className="box">
                <i className="fas fa-car" />
                <h3>car selling</h3>
                <p>
                  {" "}
                  we sales and buying New cars &amp; Old cars over services are
                  24 hours we deals on trust.
                </p>
                <a href="#" className="btn">
                  {" "}
                  read more
                </a>
              </div>
              <div className="box">
                <i className="fas fa-car-crash" />
                <h3>online vehicle verification </h3>
                <p>
                  Home; Online Vehicle Verification. Online Vehicle
                  Verification. Four Wheelers. Two Wheelers. Please Enter
                  Registration No.* ....
                </p>
                <a
                  href="https://excise.gos.pk/vehicle/vehicle_search"
                  target="_blank"
                  className="btn"
                >
                  {" "}
                  read more
                </a>
              </div>
              <div className="box">
                <i className="fas fa-car-taxes" />
                <h3>taxes pay</h3>
                <p>
                  Taxes are mandatory contributions levied on individuals or
                  corporations by a government entity—whether local, regional,
                  or national.
                </p>{" "}
                <Link to="/tax">
                <a className="btn"> read more</a>
              </Link>
                
              </div>
              <div className="box">
                <i className="fas fa-gas-pump" />
                <h3>oil change</h3>
                <p>
                  Car maintenance at your doorstep, either it be home or office
                  parking. Our services includes engine oil change,brake
                  services &amp; much more..
                </p>
                <a href="#" className="btn">
                  {" "}
                  read more
                </a>
              </div>
              <div className="box">
                <i className="fas fa-car-battery" />
                <h3>battery replacement</h3>
                <p>
                  {" "}
                  Find the best Battery Charger in Karachi. OLX Pakistan offers
                  online local classified ads for Battery Charger. Post your
                  classified ad for free in various ...
                </p>
                <a href="#" className="btn">
                  {" "}
                  read more
                </a>
              </div>
            </div>
          </section>

          <section className="newsletter">
            <h3>subscribe for latest updates</h3>

            <form action>
              <input type="email" placeholder="enter your email" />
              <input type="submit" defaultValue="subscribe" />
            </form>
          </section>

          <section className="contact" id="contact">
            <h1 className="heading">
              <span>contact</span> us
            </h1>
            <div className="row">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441375.63425037434!2d67.03448159667971!3d30.20149294426175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de34ca7faae9%3A0x4696d44c4b6ff197!2sQuetta%2C%20Balochistan!5e0!3m2!1sen!2s!4v1675067964500!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <form action>
                <h3>get in touch</h3>
                <input type="text" placeholder="your name" className="box" />
                <input type="email" placeholder="your email" className="box" />
                <input type="tel" placeholder="subject" className="box" />
                <textarea
                  placeholder="your message"
                  className="box"
                  cols={30}
                  rows={10}
                  defaultValue={""}
                />
                <input
                  type="submit"
                  defaultValue="send message"
                  className="btn"
                />
              </form>
            </div>
          </section>
          <section className="footer" id="footer">
            <div className="box-container">
              <div className="box">
                <h3>our branches</h3>
                <a href="#">
                  {" "}
                  <i className="fas fa-map-marker-alt" /> Quetta{" "}
                </a>
              </div>
              <div className="box">
                <h3>quick links</h3>
                <a href="#">
                  {" "}
                  <i className="fas fa-arrow-right" /> home{" "}
                </a>

                <a href="#">
                  {" "}
                  <i className="fas fa-arrow-right" /> services{" "}
                </a>

                <a href="#">
                  {" "}
                  <i className="fas fa-arrow-right" /> contact{" "}
                </a>
              </div>
              <div className="box">
                <h3>contact info</h3>
                <a href="#">
                  {" "}
                  <i className="fas fa-phone" /> 03258158650{" "}
                </a>

                <a href="#">
                  {" "}
                  <i className="fas fa-envelope" />
                  bismillahkhan118@gmail.com{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-map-marker-alt" />
                  Spini road arbab gali new car center asmat motors
                </a>
              </div>
              <div className="box">
                <h3>contact info</h3>
                <a href="#">
                  {" "}
                  <i className="fab fa-facebook-f" /> facebook{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-twitter" /> twitter{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-instagram" /> instagram{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-whatsapp" /> whatsapp{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-youtube" /> youtube{" "}
                </a>
              </div>
            </div>
            <div className="credit"> AutoCars@2023 all rights reserved </div>
          </section>
        </div>{" "}
      </div>
    </div>
  );
}

export default Home;
