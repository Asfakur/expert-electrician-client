import React, { useEffect, useState } from 'react';
import OrderStatus from './OrderStatus';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://quiet-reef-16003.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleChangeStatus = (id, newStatus) => {

        const newStatusInfo = {
            id,
            status: newStatus
        }

        // post request for change status to db
        fetch('https://quiet-reef-16003.herokuapp.com/changeStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStatusInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order status changed successfully');
                }

            })

    }

    return (
        <div className="">
            <h3>Total orders are {orders.length}</h3>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <OrderStatus order={order} key={order._id} handleChangeStatus={handleChangeStatus}></OrderStatus>)
                }
            </table>
        </div>
    );
};

export default Orders;