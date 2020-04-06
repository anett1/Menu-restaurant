import React from "react";
import "../styles/summaryView.scss";
import Summary from "../components/Summary";
import HeaderMenuItems from "../components/HeaderMenuItems";

function SummaryView() {
  return (
    <>
      <HeaderMenuItems />
      <Summary />
    </>
  );
}

export default SummaryView;
