// This page is finished by Zihan Xu and Yuting Shao.
import React from "react";
import BasePage from "./BasePage.js";
import List from "../components/List.js";
import Builders from "../components/Builders.js";
import MyImage from "../images/final.jpeg";
import "./ListPage.css";

function ListPage() {
  return (
    <BasePage>
      <div>
        <img src={MyImage} alt="example" />
      </div>
      <div className="ListPage">
        <h2>Universes List (Check out your result with planets above!)</h2>
        <List />
      </div>
      <div className="BuilderPage">
        <h2>Builders List</h2>
        <Builders />
      </div>
    </BasePage>
  );
}

ListPage.propTypes = {};

export default ListPage;
