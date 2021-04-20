import React from 'react';

const OrderStatus = ({ order, handleChangeStatus }) => {

    const { customerName, email, serviceName, status, _id } = order;

    return (
        <tbody>
            <tr>
                <td>{customerName}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>Credit Card</td>



                <td>
                    <select onChange={(e) => {
                        const newStatus = e.target.value;
                        handleChangeStatus(_id, newStatus);
                    }} className="form-control">
                        <option className="" value={status}>{status}</option>
                        <option className="text-success" value="Done">Done</option>
                        <option className="text-warning" value="On Going">On Going</option>
                        <option className="text-danger" value="Pending">Pending</option>
                    </select>
                </td>
            </tr>
        </tbody>
    );
};

export default OrderStatus;