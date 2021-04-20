import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomerSidebar = () => {
    return (
        <Nav className="d-flex flex-column p-3 bg-info rounded">
            
                <li className="p-3">
                    <Link to="/customer/order">Order Service</Link>
                </li>
                <li className="p-3">
                    <Link to="/customer/ordersByEmail">Ordered Lists</Link>
                </li>
                <li className="p-3">
                    <Link to="/customer/review">Review</Link>
                </li>
        
        </Nav>
    );
};

export default CustomerSidebar;