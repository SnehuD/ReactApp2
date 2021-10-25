import Loader from "react-loader-spinner";
import React from "react";
// eslint-disable-next-line
import { useState } from "react";
import Cards from "./Components/user.js";
//import Footer from "./components/footer";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1 (api)
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="body">
        {/*creating get users button*/}
        <div className="topnav" id="myTopnav">
         
        <a href="#getusers" className="btn" onClick={handleClick}><button>Get Users</button></a>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                  <Loader
                  className = "loader"
                  type="Circles"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={7000} //3 secs
                />                
              )
            ) : (
              <div className="instruction">
                <p className="txt">Users will be displayed here!!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;