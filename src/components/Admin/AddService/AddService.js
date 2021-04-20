import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const [imageURL, setImageURL] = useState();

    let history = useHistory();

    const onSubmit = formData => {
        const serviceData = {
            name: formData.serviceName,
            price: formData.cost,
            serviceDetails: formData.serviceDetails,
            img: imageURL //from useState       
        }
        console.log('service data',serviceData);
        // console.log(formData);

        // send to back end
        const url = 'https://quiet-reef-16003.herokuapp.com/addService';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res.ok) {
                    // <Redirect to="/orders" />
                    alert(serviceData.name + ' added successfully to database');
                    history.push("/home");
                }
                else {
                    alert(serviceData.name + ' service not added. Please try again');
                }
            });

    };

    const handleImageUpload = event => {

        const imageData = new FormData();
        imageData.set('key', 'a0df80bb39236cc860e662c5acb1ab7c');
        imageData.append('image', event.target.files[0]);

        const axios = require('axios');

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                let isSuccess = response.data.success;

                const imgURL = response.data.data.display_url;
                setImageURL(imgURL);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="border border-dark p-3 rounded bg-light">
            <h1>Add Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-group">
                    <label>Services Name: </label>
                    <input className="form-control" defaultValue="" {...register("serviceName", { required: true })} />
                    {errors.serviceName && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    
                    <input name="img" type="file" onChange={handleImageUpload} />
                    
                </div>

                <div className="form-group">
                    <label>Service Details: </label>
                    <input className="form-control" {...register("serviceDetails", { required: true })} />
                    {errors.serviceDetails && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label>Cost: </label>
                    <input className="form-control" {...register("cost", { required: true })} />
                    {errors.cost && <span className="text-danger">This field is required</span>}
                </div>

                <input type="submit" value="Add Service" className="btn btn-success" />
            </form>
        </div>
    );
};

export default AddService;