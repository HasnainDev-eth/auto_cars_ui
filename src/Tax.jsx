import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

function Tax() {
  const [name, setname] = useState();
  const [carmodle, setcar] = useState();
  const [number, setnumber] = useState();
  const [message, setmassage] = useState();
  async function forms() {
    const data = { name, carmodle, number, message };
    fetch("https://autocars-api.vercel.app/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
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
      <div>
        <header className="header">
          <div id="menu-btn" className="fas fa-bars" />
          <a href="/" className="logo">
            {" "}
            <span>Auto</span>Cars
          </a>
          <nav className="navbar">
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
          <form id="myForm">
            <input id="name" type="name" placeholder="name" className="box" />
            <input id="carmodle" type="text" className="box" />
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
        {/*
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
*/}
        {/*
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
*/}
        {/* component */}
        {/* Code on GiHub: https://github.com/vitalikda/form-floating-labels-tailwindcss */}
        {/* component */}
        {/*
  UI Design Prototype
  Link : https://dribbble.com/shots/10452538-React-UI-Components
*/}
        {/*
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
*/}
        <section className="main-form bg-gray-100 ">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  Simple and Easy Tax services
                </p>
                <div className="mt-8">
                  <a href className="text-2xl font-bold text-pink-600">
                  03258158650
                  </a>
                  <address className="mt-2 not-italic">Spini road arbab gali
new car center asmat motors</address>
                </div>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    id="names"
                    name="names"
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="carmodle">
                      Car Model
                    </label>
                    <input
                      className="w-full rounded-lg border-black-200 p-3 text-sm"
                      placeholder="Car Model"
                      id="carmodle#"
                      value={carmodle}
                      onChange={(e)=>setcar(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="number">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="text"
                      id="number"
                      value={number}
                      onChange={(e)=>setnumber(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows={8}
                    type="text"
                    id="message"
                    defaultValue={""}
                    value={message}
                    onChange={(e)=>setmassage(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <button
                    onClick={()=>forms()}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tax;
