import React from 'react';
import PropTypes from 'prop-types';
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";


const MainLayout = props => {
    return (
    <div className="fullHeight">
        <Header />
            <div className="main">{props.children}</div>
        <Footer />
    </div>
    );
}

MainLayout.propTypes = {

}

export default MainLayout
