import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Errormessage from "./Errormessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../action/userAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userlogin = useSelector((state) => state.userlogin);
  const { loading, error, userInfo } = userlogin;
  const formhandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/notes");
    }
  }, [navigate, userInfo]);

  return (
    <>
      <div className=" m-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            {error && <Errormessage>{"Invalid user"}</Errormessage>}
            {loading && <Loading />}
            <form onSubmit={formhandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  required={true}
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  required={true}
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
                <span className=" ms-5">
                  Don't have an account?{" "}
                  <Link to="/register" className="link-success">
                    Register
                  </Link>
                </span>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
