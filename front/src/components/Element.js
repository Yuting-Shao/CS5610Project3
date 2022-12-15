// This component is finished by Yuting Shao.
import React from "react";
import "./Element.css";
// The css file is empty and it's better to be organized by Modules.

function Element({ name, initialValue }) {
  return (
    <table class="table-info">
      <tr>
        <td>{name}:</td>
        <td>{initialValue}</td>
      </tr>
    </table>
  );
}

export default Element;
// Missing Definition of PropTypes
