import React from "react";

function Container({ children , classname}) {
  return <div className={`${classname} container mx-auto px-4 pt-14`}>{children}</div>;
}

export default Container;
