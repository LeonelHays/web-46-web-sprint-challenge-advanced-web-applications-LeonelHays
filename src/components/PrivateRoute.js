//Task List:
import { Route, Redirect } from "react-router";
import React from "react";

const PrivateRoute = ({component:Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem("token")){
            return <Component {...props}/>
        } else {
            return <Redirect to="/login"/>
        }
    }}/>
}

export default PrivateRoute;
//1. Build a PrivateRoute component that redirects if user is not logged in