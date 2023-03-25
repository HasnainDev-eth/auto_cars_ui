import React ,{useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Contact() {
    const [nav,setnav]=  useState("navbar");

  function toggle(){
    if(nav === "navbar"){
      setnav("navbar active")
    }
    if(nav === "navbar active"){
      setnav("navbar")
    }
  }
  return (
    <div>
      <header className="header">
        <div id="menu-btn" className="fas fa-bars" onClick={() => toggle()} />
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
      {/* Container for demo purpose */}
<div className="container my-24 px-6 mx-auto">
  {/* Section: Design Block */}
  <section className="mb-32 text-gray-800">
    <style dangerouslySetInnerHTML={{__html: "\n      .map-container-2 {\n        height: 500px;\n      }\n    " }} />
    <div className="block rounded-lg shadow-lg bg-white">
      <div className="flex flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
          <div className="map-container-2 w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441375.63425037434!2d67.03448159667971!3d30.20149294426175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de34ca7faae9%3A0x4696d44c4b6ff197!2sQuetta%2C%20Balochistan!5e0!3m2!1sen!2s!4v1675067964500!5m2!1sen!2s" className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder={0} allowFullScreen />
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="flex flex-wrap pt-12 lg:pt-0">
            <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="p-4 bg-yellow-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1">Bismillah</p>
                  <p className="text-gray-500">bismillahkhan118@gmail.com</p>
                  <p className="text-gray-500">03258158650</p>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</div>
{/* Container for demo purpose */}

    </div>
  );
}

export default Contact;
