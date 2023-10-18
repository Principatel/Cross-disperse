import React from "react";
import "../../Styles/landingpage.css";
import Ihomepage from "../homepages/Ihomepage";
import Iihomepage from "../homepages/Iihomepage";
import Footer from "../homepages/Footer";

function Landingpage() {
  return (
    <div className="landingpff">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Ihomepage />
        <Iihomepage />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Footer />
      </div>
    </div>
  );
}

export default Landingpage;
