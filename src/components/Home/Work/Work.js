import React from 'react';
import './Work.css';

const Work = ({work}) => {
    return (
        <div className="col-md-4 text-center p-3 hover-container">
            <img className="rounded" src={work.image} height="300" width="350" alt=""/>
        </div>
    );
};

export default Work;