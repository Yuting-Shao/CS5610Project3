// This page is finished by Zihan Xu and Yuting Shao.
import React from "react";
import BasePage from "./BasePage.js";
import List from "../components/List.js";
import Builders from "../components/Builders.js";

function ListPage() {
  return (
    <BasePage>
      <div className="ListPage">
        <h1>Universes List</h1>
        <List />
      </div>
      <div className="BuilderPage">
        <h1>Builders List</h1>
        <Builders />
      </div>
    </BasePage>
  );
}

ListPage.propTypes = {};

export default ListPage;
