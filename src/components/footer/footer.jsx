import React from "react";
import "./footer.scss";
import Logo from "../logo/logo";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Logo width={"122px"} height={"39.44px"} color={"white"} />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
export default Footer;
