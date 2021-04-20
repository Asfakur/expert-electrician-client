import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    
    const [reviews, setReviews] = useState([]);

    //load data from backend
    useEffect(() => {
        fetch('https://quiet-reef-16003.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <section className="my-5">
            <div>
                <h1 className="text-center">Reviews</h1>
                <hr className="wave-icon"/>
            </div>
            <div className="row container-fluid mt-4">
                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;