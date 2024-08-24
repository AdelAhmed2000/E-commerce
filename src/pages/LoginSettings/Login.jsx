import React, { useRef, useState } from "react";
import "../../style/pages/login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AddToCartContext";

export const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const redirect = location.state?.path || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirect, { replace: true });
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="Login auth col-lg-3 col-md-6 col-sm-10">
            <h3>Login</h3>
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="inputEmail" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  required
                  ref={emailRef}
                />
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  required
                  ref={passwordRef}
                />
              </div>
              <button
                type="submit"
                class="paddingButton btn btn-primary mb-3 w-100 font"
                disabled={loading}
              >
                Login
              </button>
            </form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgotPassword" className="textColor">
                forgot Password
              </Link>
            </div>
          </div>
          <div className="text-center mt-2 font">
            Need an account ?!
            <Link to={"/signUp"} className="textColor">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
