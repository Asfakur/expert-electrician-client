import React from 'react';
import { Link, Route } from "react-router-dom";
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import CustomerReview from '../CustomerReview/CustomerReview';
import IndividualOrdered from '../IndividualOrdered/IndividualOrdered';
import Order from '../Order/Order';


import CustomerSidebar from './CustomerSidebar';

const CustomerDashBoard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center">Customer Dashboard</h1>
            <div className="container-fluid row">

                <div className="col-sm-3">
                    <CustomerSidebar></CustomerSidebar>

                </div>

                <div className="col-sm-7 mb-5">
                    
                    <Route path="/customer/order/:serviceId" component={Order}></Route>
                    <Route path="/customer/ordersByEmail" component={IndividualOrdered}></Route>
                    <Route path="/customer/review" component={CustomerReview}></Route>


                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default CustomerDashBoard;