import React, { useRef, useState } from "react";
import "../../style/pages/login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AddToCartContext";

export const ForgetPassword = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inpox to get new password");
    } catch {
      setError("Failed to Reset Password");
    }
    setLoading(false);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-10 m-auto">
            <div className="ForgotPassword auth">
              <h3>Reset Password</h3>
              {error && (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              {message && (
                <div class="alert alert-success" role="alert">
                  {message}
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
                    ref={emailRef}
                  />
                </div>
                <button
                  type="submit"
                  class="paddingButton btn btn-primary mb-3 w-100 font"
                  disabled={loading}
                >
                  Reset Password
                </button>
              </form>
              <div className="w-100 text-center mt-3">
                <Link to="/login" className="textColor">
                  Login
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
      </div>
    </>
  );
};
