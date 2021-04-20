import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewStar = ({star}) => {
    let count = star;

    return (
        <div>
            {
                
            }
            {
                <h5 >{star} <FontAwesomeIcon style={{ color: '#ffc107' }} icon={faStar} /></h5>
            }
        </div>
    );
};

export default ReviewStar;