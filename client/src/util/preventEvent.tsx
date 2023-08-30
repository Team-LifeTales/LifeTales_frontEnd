import React from "react";

const preventEvent = (e: React.SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

export default preventEvent;
