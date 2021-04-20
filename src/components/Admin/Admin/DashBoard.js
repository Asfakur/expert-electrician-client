import React, { useContext } from 'react';

import { Link, Route } from "react-router-dom";
import { UserContext } from '../../../App';
import CustomerDashBoard from '../../Customer/CustomerDashBoard/CustomerDashBoard';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import ManageService from '../ManageService/ManageService';
import Orders from '../OrdersManage/Orders';
import Slidebar from './Slidebar';

const DashBoard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <div>
            <Navbar></Navbar>
            <h1 className="text-center">Admin Dashboard</h1>
            <div className="container-fluid row">

                <div className="col-sm-3">
                    <Slidebar></Slidebar>
                </div>

                <div className="col-sm-7">

                    <Route path="/admin/add" component={AddService}></Route>
                    <Route path="/admin/manage" component={ManageService}></Route>
                    <Route path="/admin/orders" component={Orders}></Route>
                    <Route path="/admin/newAdmin" component={AddAdmin}></Route>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;