import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DeleteService from '../DeleteService/DeleteService';

const ManageService = () => {
    const [services, setServices] = useState([]);
    const [total, setTotal] = useState(services.length);

    const history = useHistory();

    //load data from backend
    useEffect(() => {
        fetch('https://quiet-reef-16003.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [total])

    const handleDelete = (id) => {

        console.log(id);
        fetch(`https://quiet-reef-16003.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(data => {
                if (data) {
                    // alert(data.name +' deleted successfully');
                    setTotal(total - 1);
                }
                else {
                    alert('Unable to delete this services');
                }
            })

    }

    return (
        <div>
            <h2 className="text-center p-3">Total available all services</h2>
            <div className="row">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        services.map(service => <DeleteService service={service} key={service._id} handleDelete={handleDelete}></DeleteService>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageService;