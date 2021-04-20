import React from 'react';

const DeleteService = ({service , handleDelete}) => {
    const { name, price, _id} = service;

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>$ {price}</td>
                <td><button className="btn btn-danger" onClick={() =>handleDelete(_id)}>Delete</button></td>
                
            </tr>
        </tbody>
    );
};

export default DeleteService;