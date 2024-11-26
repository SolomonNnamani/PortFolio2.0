import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/contact.scss";

//CONTACT COMPONENT
const Contact = (props) => {
  const { contact } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let namePattern = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.trim()) {
      if (!namePattern.test(name)) {
        newErrors.name = "Name must contain only letters and spaces";
      } else if (name.length < 2 || name.length > 50) {
        newErrors.name = "Name must be between 2 and 50 characters";
      }
    }

    if (email.trim()) {
      if (!emailPattern.test(email)) {
        newErrors.email =
          "Please enter a valid email address(e.g, example@domain.com)";
      }
    }

    if (message.trim()) {
      if (message.length < 10 || message.length > 500) {
        newErrors.message = "Description must be between 10 to 500 characters";
      }
    }
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    const checkForErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (checkForErrors) {
      setErrors(validationErrors);
      return;
    }

    const serviceId = "service_iza571k";
    const templateId = "template_16v3rvw";
    const publicKey = "Gj8MNA8zsFQ-bZUjr";

    emailjs.init(publicKey);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully");

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div id={contact} className="contactContainer">
      <div className="flexContact">
        <span className="flexContact_span none">
          <hr />
        </span>
        <p className="flexContact_para">CONTACT</p>
        <span className="flexContact_span">
          <hr />
        </span>
      </div>

      <div className="inputContainer">
        <p className="inputText">
          Hey there! I'm always excited to explore new opportunities where my
          skills can make a real difference. Got a cool project that could use
          some fresh talent? I'm all ears and ready to bring my A-game! Feel
          free to drop me a line and let's chat about how we might work magic
          together.{" "}
        </p>

        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              required
            />
            <br />
            {errors.name && <small>{errors.name} </small>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              required
            />
            <br />
            {errors.email && <small>{errors.email} </small>}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              value={message}
              placeholder="Got anything we need to work on? Let me Know."
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors((prev) => ({ ...prev, message: "" }));
              }}
              required
            />
            <br />
            {errors.message && <small>{errors.message}</small>}
          </div>

          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
