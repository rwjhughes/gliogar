// app/pages/Bds.js

import React from 'react';

const Bds = () => {
    return (
        <div style={styles.container}>
            <div style={styles.centered}>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    centered: {
        textAlign: 'center',
    },
};

export default Bds;
