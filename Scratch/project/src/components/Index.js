import React, { Component, useState } from 'react';

const Index  = props => {

    const loadTown = () => {
        return(
            console.log('HERE'),
            <h1>hello</h1>
        );
    }

return(
        <div>
            <div>
                <h3>Farm</h3>
                <h3 onClick={loadTown}>Town</h3>
                <h3>Map</h3>
            </div>
        </div>
    );
};

export default Index;
