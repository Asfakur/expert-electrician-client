import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const CustomerReview = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = formData => {
        const reviewDetails = {
            email: loggedInUser.email,
            figure: loggedInUser.avatar,
            ...formData
        }
        console.log(reviewDetails);

        // post request for save review to db
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your review successfully added');
                }

            })
    }
    return (
        <div className="col-md-6">
            <h3>Customer Review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Customer Name</label>
                    <input className="form-control" {...register("name", { required: true })} defaultValue={loggedInUser.name} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label>Customer Address</label>
                    <input className="form-control" {...register("from", { required: true })} />
                    {errors.from && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label>Review</label>
                    <input className="form-control" placeholder="Description" {...register("description", { required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>


                <div className="form-group">
                    <label>Select Star</label>
                    <select {...register("star")} className="form-control">
                        <option value="5">5 Star</option>
                        <option value="4">4 Star</option>
                        <option value="3">3 Star</option>
                        <option value="2">2 Star</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>

                <input type="submit" value="Submit Review" className="btn btn-success" />
            </form>
        </div>
    );
};

export default CustomerReview;