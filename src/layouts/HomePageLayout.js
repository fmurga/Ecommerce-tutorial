import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

const HomePageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

HomePageLayout.propTypes = {};

export default HomePageLayout;
