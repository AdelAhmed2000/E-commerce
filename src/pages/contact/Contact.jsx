import React from "react";
import "./../../style/component/about/contact.css";
export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="contact">
        <div className="conTitle">
          <h3>Contact</h3>
          <h1>Say Hello!</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <h3 className="mb-4">Can We Help?</h3>
              <p>
                Our team was handpicked for their understanding of materials,
                process and passion for fashion. Whether you are browsing our
                site or visiting our store, we are always willing to share our
                deep knowledge and understanding of our makers and their craft.
              </p>
              <p>
                The most commonly asked questions are covered in Our <b>FAQs</b>
                If you have any specific questions please do not hesitate to
                contact us by completing this form or calling our customer
                services team on 0101 506 7823
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <form onSubmit={handleSubmit}>
                <label for="name" class="form-label">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
                <label for="email" class="form-label">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
                <label for="subject" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-outline-secondary mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div className="backColor">
                <b>STORE WORKING HOURS</b>
                <p>Daily</p>
                <p>09:30AM – 10:00PM</p>
                <p>WEEKEDAYS</p>
                <p>09:30AM – 10:00PM</p>
                <b>TELEPHONE</b>
                <p>0101 506 7823</p>
                <b>EMAIL</b>
                <p>adelahmedsayed399@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
