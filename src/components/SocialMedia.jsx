import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsLink } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin
          href="https://www.linkedin.com/in/andre-morales-445565a8/"
          target="_blank"
          rel="nonreferrer"
          cursor={"pointer"}
        />
      </div>
      <div>
        <FaFacebookF
          href="https://www.facebook.com/andre.morales.18/"
          target="_blank"
          rel="nonreferrer"
          cursor={"pointer"}
        />
      </div>
      <div>
        <BsInstagram
          href="https://www.instagram.com/andre_mo0987/"
          target="_blank"
          rel="nonreferrer"
          cursor={"pointer"}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
