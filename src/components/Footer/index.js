import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

const Footer = props => {
    return (
      <footer className="footer">
        <div className="wrap">© SimpleTut {new Date().getFullYear()}</div>
      </footer>
    );
}

Footer.propTypes = {

}

export default Footer
