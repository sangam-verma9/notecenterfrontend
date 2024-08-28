import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import bg from "../images/boybook.png";
const Home = () => {
  let time = new Date().toLocaleTimeString();
  const [currtime, setCurrtime] = useState(time);
  const gettime = () => {
    let t = new Date().toLocaleTimeString();
    setCurrtime(t);
  };
  setInterval(gettime, 1000);
  const userlogin = useSelector((state) => state.userlogin);
  const { userInfo } = userlogin;
  return (
    <>
      <div className=" container">
        <div>
          <h2 className=" text-center pt-5" style={{ fontFamily: "sansrif" }}>
            <span style={{ color: "lightgreen" }}>Simplicity</span>{" "}
            <span style={{ color: "lightpink" }}>is the final</span>{" "}
            <span style={{ color: "lightblue" }}>achievement</span>.
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="container homeheading">
              <h2
                style={{
                  paddingTop: "8vw",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                Hi! {userInfo ? userInfo.name : "Jhon Doe"}
              </h2>
              <h2
                style={{
                  lineHeight: "50px",
                  color: "rgb(200,200,228)",
                  textAlign: "center",
                }}
              >
                {currtime}
              </h2>
              <h3 style={{ textAlign: "center" }}>
                Keep your notes here. <br />I am notecenter only for you.
              </h3>
            </div>
            <div className="container text-center ">
              {
                userInfo?
                <>
                  <button className="btn btn-outline-success m-4">
                    <Link
                      to="login"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <b>Login</b>
                    </Link>
                  </button>
                  <button className="btn btn-outline-warning m-4">
                    <Link
                      to="register"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <b>Signup</b>
                    </Link>
                  </button>
                </>
                :
                <> </>
              }
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center p-3 ">
            <img src={bg} className=" img-fluid" alt="..." />
          </div>
        </div>
      </div>
      <div className=" text-center">
        <button className="btn btn-primary m-4 px-5">
          <Link to="notes" style={{ textDecoration: "none", color: "black" }}>
            <b className=" text-white">Notes</b>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
