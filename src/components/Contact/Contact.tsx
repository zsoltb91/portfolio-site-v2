import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current !== null) {
      emailjs
        .sendForm(
          "",
          "",
          form.current,
          ""
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent.");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contactcont">
      <h2 className="contactme">Contact me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />

        <input className="inbtn" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
