import React from "react";
import "../../index.css";
import SectionImage from "../../components/SectionImage/SectionImage";
import contact from "../../backgroundImages/contact.png";

function Contact() {
  // add that when scrolled to top go to port
  return (
    <div id="contact">
      <SectionImage bgIMG={contact} sectionName={"CONTACT"} />

      <div className="content section" id="contactSection">
        <h3 className="center">CONTACT ME</h3>
        <hr></hr>

        <div className="col-md-12" id="contactPanel">
          <div id="addressDetails">
            <i className="fa fa-map-marker fa-fw margin-right"></i> Walluf,
            Germany<br></br>
            {/* <!-- <i class="fa fa-phone fa-fw margin-right"></i> Phone: 813 400 6633<br> --> */}
            <i className="fa fa-envelope fa-fw margin-right"></i>{" "}
            steffilebby@gmail.com<br></br>
          </div>
          <p>Or leave me a note:</p>

          <form
            className="contact"
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/steffilebby@gmail.com"
            method="post"
          >
            <fieldset id="fs-frm-inputs">
              <label htmlFor="full-name">Name</label>
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="Name"
                required=""
              ></input>
              <label htmlFor="email-address">Email</label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="Email"
                required=""
              ></input>
              <label htmlFor="message">Message</label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Message"
                required=""
              ></textarea>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission"
              ></input>
            </fieldset>
            <button
              type="submit"
              className="button center padding-large"
              id="sendBtn"
            >
              <i className="fa fa-paper-plane"></i> Send Message
            </button>
            {/* <!-- <input type="submit" value="Submit" id="sendBtn"> --> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
