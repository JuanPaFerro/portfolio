import React from "react";
import emailjs, { init } from "@emailjs/browser";

const useSendEmail = ({ name, email, message }) => {
  init(process.env.KEY);

  emailjs
    .send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      { name, email, message },
      process.env.KEY
    )
    .then((res) => console.log("Response",res));
};
export default useSendEmail;
