import React, { useRef, useState } from "react";
import "../../style/pages/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AddToCartContext";

export const SignUp = () => {
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="signUp auth col-lg-3 col-md-6 col-sm-9">
            <h3>SignUp</h3>
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
              <div class="mb-3">
                <label for="passwordConfirmation" class="form-label">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="passwordConfirmation"
                  ref={passwordConfirmationRef}
                />
              </div>
              <button
                type="submit"
                class="paddingButton btn btn-primary mb-3 w-100 font"
                disabled={loading}
              >
                SignUp
              </button>
            </form>
            <div className="text-center mt-2 ">
              Already have an account?!
              <Link to={"/login"} className="textColor">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
