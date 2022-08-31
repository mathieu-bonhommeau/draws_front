import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header } from "../components";

const Container = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

Container.propTypes = {

};

export default Container;
