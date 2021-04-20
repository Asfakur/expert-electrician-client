import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Nav className="d-flex flex-column p-3 bg-info rounded">
            
                <li className="p-3">
                    <Link to="/admin/manage">Manage Service</Link>
                </li>
                <li className="p-3">
                    <Link to="/admin/add">Add Service</Link>
                </li>
                <li className="p-3">
                    <Link to="/admin/orders">Order List</Link>
                </li>
                <li className="p-3">
                    <Link to="/admin/newAdmin">Make Admin</Link>
                </li>
                
        
        </Nav>
    );
};

export default Sidebar;