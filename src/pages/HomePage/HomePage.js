import React from 'react'
import PropTypes from 'prop-types'
import Directory from '../../components/Directory/Directory';

import './HomePage.scss';



const HomePage = props => {
    return (
        <section className="homepage">
            <Directory />
        </section>
    )
}

HomePage.propTypes = {

}

export default HomePage
