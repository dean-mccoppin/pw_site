import React from "react";
import sizeMe from "react-sizeme";
import NavComponent from "./navbardesktop.jsx";
import NavComponentMobile from "./navbarmobile.jsx";

function NavParent(props) {
  const { width, height } = props.size;

  const ToRenderChild = width > 768 ? NavComponent : NavComponentMobile;

  return <ToRenderChild />;
}

export default sizeMe({ monitorHeight: true })(NavParent);
