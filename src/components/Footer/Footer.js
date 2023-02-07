import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-black">
      <p className="text-white py-5 text-center text-sm">
        Copyright {date.getFullYear()} || All Rights Reserved
      </p>
      <div className="text-center p-5">
        <a
          className="p-3"
          href="https://www.facebook.com/SakibHabibUllah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            color="#fff"
            size="xl"
          ></FontAwesomeIcon>
        </a>
        <a
          className="p-3"
          href="https://www.linkedin.com/in/habib-ullah-1392bb18b/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#fff"
            size="xl"
          ></FontAwesomeIcon>
        </a>
        <span className="p-3">
          <FontAwesomeIcon
            icon={faInstagram}
            color="#fff"
            size="xl"
          ></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
};

export default Footer;
