import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const IndividualOrdered = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let count = 1;

    const userEmail = {
        email: loggedInUser.email
    }

    useEffect(() => {
        fetch('http://localhost:5000/ordersByEmail',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userEmail)
            }
        )
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div className="container">
            <h3>Your total orders are {orders.length}</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {
                    orders.map(order => {
                        return (
                            <tbody key={order.price}>
                                <tr>
                                    <th scope="row">{count++}</th>
                                    <td>{order.serviceName}</td>
                                    <td>$ {order.price}</td>
                                    <td>{order.orderDate}</td>
                                    <td className="btn btn-warning font-weight-bold">{order.status}</td>
                                </tr>
                            </tbody>
                        );
                    })
                }
            </table>
        </div>
    );
};

export default IndividualOrdered;