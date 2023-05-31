import React, { useEffect, useState } from "react";
import Errormessage from "./Errormessage";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, registration } from "../action/userAction";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [message, setMessage] = useState(false);
  const userRegister = useSelector((state) => state.userregister);
  const { loading, error } = userRegister;
  const userlogin = useSelector((state) => state.userlogin);
  const { userInfo } = userlogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/notes");
    }
  }, [navigate, userInfo]);

  const formhandler = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setMessage(true);
    } else {
      dispatch(registration(name, email, password));
      dispatch(login(email, password));
    }
  };

  return (
    <>
      <div className=" m-5">
        <div className="row d-flex justify-content-center align-content-center">
          <div className="col-md-8">
            {message && (
              <Errormessage variant="warning">
                {"Password not matched"}
              </Errormessage>
            )}
            {error && <Errormessage variant="info">{error}</Errormessage>}
            {loading && <Loading />}
            <form onSubmit={formhandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  required="true"
                  onChange={(e) => setName(e.target.value)}
                  id="exampleInputname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  required="true"
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
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
                  required="true"
                  onChange={(e) => setPassword(e.target.value)}
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={cpassword}
                  required="true"
                  onChange={(e) => setCpassword(e.target.value)}
                  id="exampleInputPassword2"
                />
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

export default Signup;
