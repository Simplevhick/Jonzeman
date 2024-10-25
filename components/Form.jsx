import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k2ecmzo", "template_qni6tpl", form.current, {
        publicKey: "-lmdJWW5ASH8IJ4En",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        className="input"
        placeholder="Full name"
        name="from_name"
      />
      <input
        type="email"
        className="input"
        placeholder="Emaill address"
        name="from_name"
      />
      <textarea
        className="textarea mb-2"
        placeholder="Your message"
        name="message"
      />
      <input
        type="submit"
        className="btn self-start"
        placeholder="Send message"
      />
    </form>
  );
};

export default Form;
