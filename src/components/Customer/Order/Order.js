import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Order = () => {

    const { serviceId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [service, setService] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])

    const onSubmit = formData => {

        const orderDetails = {
            email: loggedInUser.email,
            customerName: loggedInUser.name,
            serviceName: service.name,
            orderDate: (new Date()).toUTCString(),
            price: service.price,
            serviceId: service._id,
            status: 'Pending',
            ...formData
        }
        // console.log(orderDetails);
        setOrderData(orderDetails);
    }

    const handlePaymentSuccess = paymentId => {

        const orderPaymentInfo = {
            ...orderData,
            paymentId
        };

        console.log(orderPaymentInfo);

        // post request for save order to db
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderPaymentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully');
                }

            })
    }



    return (
        <div>
            <h1 className="text-center">Place order</h1>

            <div className="row">
                <div className="col-md-6">

                    <h3 className="text-center">Service Description</h3>

                    <table className="table table-hover bg-light rounded">
                        <thead>
                            <tr>
                                <th scope="col">Service Name</th>
                                <th scope="col">Service Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{service.name}</td>

                                <td>$ {service.price}</td>
                            </tr>

                            <tr>
                                <th scope="col">Total</th>

                                <th scope="col">$ {service.price}</th>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div style={{ display: orderData ? 'none' : 'block' }} className="col-md-6">
                    <h3>Customer Information</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Customer Address</label>
                            <input className="form-control" {...register("customerAddress", { required: true })} />
                            {errors.customerAddress && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <label>Customer Phone</label>
                            <input className="form-control" {...register("customerPhone", { required: true })} />
                            {errors.customerPhone && <span className="text-danger">This field is required</span>}
                        </div>

                        <input type="submit" value="Place Order" className="btn btn-success" />
                    </form>
                </div>

                <div style={{ display: orderData ? 'block' : 'none' }} className="col-md-6">
                    <h2>Please Pay Your bill</h2>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>

            </div>
        </div>
    );
};

export default Order;