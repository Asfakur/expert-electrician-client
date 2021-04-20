import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import DashBoard from './components/Admin/Admin/DashBoard';
import CustomerDashBoard from './components/Customer/CustomerDashBoard/CustomerDashBoard';
import MainDashBoard from './components/MainDashBoard/MainDashBoard';

export const UserContext = createContext(); //must be export 



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/admin">
            <MainDashBoard></MainDashBoard>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/customer">
            <CustomerDashBoard></CustomerDashBoard>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
