import React from "react";
import emailjs from "emailjs-com";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import grey from "@material-ui/core/colors/grey";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail",
        "template_y2nt3nf",
        e.target,
        "user_4gUugD20CyDJhLpGInELA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
    <div
      className="h-screen flex items-center justify-center"
      style={{
        background: "#0A192E",
      }} id='/contact'
    >
      <div>
        <h1 className="text-6xl font-mono text-gray-300 mb-10">
          Let's Contact!
        </h1>
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto ">
                <input
                  type="text"
                  className="form-control w-96 h-10"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control w-96 h-10"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control w-96 h-10"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control w-96"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message "
                  name="message"
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-6'>
        <GitHubIcon style={{ color: grey[300] }} fontSize="large" />
        <LinkedInIcon fontSize="large" style={{ color: grey[300] }} />
      </div>
    </div>
    </>
  );
}

export default Contact;
