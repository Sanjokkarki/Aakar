import React from 'react';
import Header from './Header/Header';

const BodyLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    );
};

export default BodyLayout;
