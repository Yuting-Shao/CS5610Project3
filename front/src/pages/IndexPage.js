// This page is finished by Zihan Xu.
import React from "react";
import BasePage from "./BasePage.js";
import MyImage from "../images/image0.gif";
import MyImage2 from "../images/wave1.png";
import "./IndexPage.css";

function IndexPage() {
  return (
    <BasePage>
      <div className="IndexPage">
        <h1>Welcome to Stellaris!</h1>
        <div>
          <p>
            In year 2077, human has explored all planets in Oort cloud. They owned
            the technology to manage a global ecosystem of a just explored
            planet. United Nation wonder if we can simulate the operation result
            of exploiting a given planet. Therefore, they hired 79 years old
            computer science masters Zihan and Yuting from Northeastern
            University to design a simulator web with react, mongoDB and all
            required functions from professor John.
          </p>
        </div>
        <div>
          <img src={MyImage} alt="planets" />
        </div>
        <div>
          <img src={MyImage2} alt="wave1" class="bottom-img"/>
        </div>
      </div>
    </BasePage>
  );
}

IndexPage.propTypes = {};

export default IndexPage;
