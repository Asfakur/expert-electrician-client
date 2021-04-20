import React from 'react';
import ReviewStar from './ReviewStar';


const Review = ({ review }) => {
    return (
        <div className="col-md-4 p-5">

            <div className="d-flex align-items-center">
                <img className="rounded-circle" src={review.figure} alt="" height="80" width="80px" />
                <div className="ml-3">
                    <h5 >{review.name}</h5>
                    <h6>{review.from}</h6>
                </div>
            </div>
            <p>{review.description}</p>
            <ReviewStar star={review.star}></ReviewStar>
        </div>
    );
};

export default Review;