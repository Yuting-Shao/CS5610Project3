// This page is finished by Yuting Shao.
// Great idea adding an Error Page for your website!
import React from "react";
// import PropTypes from "prop-types";

import BasePage from "./BasePage.js";

function ErrorPage() {
  return (
    <BasePage>
      <div>
        <h1>Path not provided</h1>
      </div>
    </BasePage>
  );
}

ErrorPage.propTypes = {};

export default ErrorPage;
