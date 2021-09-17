import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axiosWithAuth from "./helpers/axiosWithAuth";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage"
import "./styles.scss";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          
              <Link to="/login">Login</Link>
              <Link to="/logout">Logout</Link>
              
              {token && <Link to='/colors'>View Bubbles</Link>}
              
      
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/colors" component={BubblePage}/>
          <Route path="/" />
        </Switch>
        </header>
      </div>
    </Router>
  );
}

const Logout = (props) => {
  console.log(props);
  useEffect(() => {
      axiosWithAuth()
      .post("http://localhost:5000/api/logout", {
      }).then(res => {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          props.history.push("/login")
      }).catch(err => {
          console.log(err);
      })
  }, [])
  return(<div></div>);
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.