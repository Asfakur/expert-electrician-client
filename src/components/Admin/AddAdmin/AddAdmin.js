import React from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = adminInfo => {
        console.log(adminInfo);

        // post request for save new admin to db
        fetch('https://quiet-reef-16003.herokuapp.com/addNewAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert(adminInfo.adminEmail + ' successfully added as new admin');
                }

            })
    }
    return (
        <div className="border border-dark p-3 rounded bg-light">
            <h1>Add New Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-group">
                    <label>Admin Name:</label>
                    <input className="form-control" defaultValue="" {...register("adminName", { required: true })} />
                    {errors.adminName && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label>Admin Email </label>
                    <input className="form-control" type="email" {...register("adminEmail", { required: true })} />
                    {errors.adminEmail && <span className="text-danger">This field is required</span>}
                </div>


                <input type="submit" value="Add New Admin" className="btn btn-success" />
            </form>
        </div>
    );
};

export default AddAdmin;