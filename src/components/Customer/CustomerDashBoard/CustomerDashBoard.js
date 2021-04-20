import React from 'react';
import { Link, Route } from "react-router-dom";
import CustomerReview from '../CustomerReview/CustomerReview';
import IndividualOrdered from '../IndividualOrdered/IndividualOrdered';
import Order from '../Order/Order';


import CustomerSidebar from './CustomerSidebar';

const CustomerDashBoard = () => {
    return (
        <div>
            <h1 className="text-center">Customer Dashboard</h1>
            <div className="container-fluid row">

                <div className="col-sm-3">
                    <CustomerSidebar></CustomerSidebar>

                </div>

                <div className="col-sm-7">
                    
                    <Route path="/customer/order/:serviceId" component={Order}></Route>
                    <Route path="/customer/ordersByEmail" component={IndividualOrdered}></Route>
                    <Route path="/customer/review" component={CustomerReview}></Route>
                </div>

            </div>
        </div>
    );
};

export default CustomerDashBoard;