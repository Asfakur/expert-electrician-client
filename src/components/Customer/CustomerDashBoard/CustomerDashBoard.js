import React from 'react';
import { useContext } from 'react';
import { Link, Route } from "react-router-dom";
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import CustomerReview from '../CustomerReview/CustomerReview';
import IndividualOrdered from '../IndividualOrdered/IndividualOrdered';
import Order from '../Order/Order';


import CustomerSidebar from './CustomerSidebar';

const CustomerDashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            {
                !loggedInUser.isAdmin ?
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
                : <h1 className="text-danger">'{loggedInUser.email}' Admin is Unable to order for service. To order a service you should be Customer. Please log in as a customer</h1>

            }

        </div>
    );
};

export default CustomerDashBoard;