import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/andre-morales-445565a8/"
        target="_blank"
        cursor="pointer"
        rel="nonreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        href="https://www.facebook.com/andre.morales.18/"
        target="_blank"
        rel="nonreferrer"
        cursor={"pointer"}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/andre_mo0987/"
        target="_blank"
        rel="nonreferrer"
        cursor={"pointer"}
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
