import React from 'react';
import { useForm } from 'react-hook-form';

const Comment = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert("Your submission is recorded. Thankyou")
    }
    return (
        <div className="d-flex justify-content-center my-3">

            <div className="col-md-6">
                <h3 className="text-center">Drop Your Opinions/Complain</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <label>Your Name</label>
                        <input className="form-control" defaultValue="" {...register("personName", { required: true })} />
                        {errors.personName && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label>Your Email </label>
                        <input className="form-control" type="email" {...register("personEmail", { required: true })} />
                        {errors.personEmail && <span className="text-danger">This field is required</span>}
                    </div>


                    <input type="submit" value="Submit" className="btn btn-success" />
                </form>
            </div>
        </div>
    );
};

export default Comment;