import React, { useContext } from 'react';
import { UserContext } from '../../App';
import DashBoard from '../Admin/Admin/DashBoard';
import CustomerDashBoard from '../Customer/CustomerDashBoard/CustomerDashBoard';


const MainDashBoard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            {
                loggedInUser.isAdmin &&
                <DashBoard></DashBoard>
            }
            {
                !loggedInUser.isAdmin &&
                <CustomerDashBoard></CustomerDashBoard>
            }
        </div>
    );
};

export default MainDashBoard;