import React from "react";
import "../style/footer.scss";
import { FaRegCopyright } from "react-icons/fa";

//FOOTER COMPONENT
const Footer = () => {
  return (
    <div className="footerContainer">
      <p>
        <FaRegCopyright /> Solomon, 2024
      </p>
    </div>
  );
};
export default Footer;
