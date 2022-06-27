import React from "react";

const Spinner = ({ msg }) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{msg}</div>
    </div>
  );
};

Spinner.defaultProps = {
  msg: "Loading...",
};

export default Spinner;
