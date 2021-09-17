import axios from "axios";
import React, {useState} from "react";

 const initialState = {
   username: '',
   password: ''
 }
 
const Login = (props) => {
  const [error , setError] = useState('');
  const [log, setLog] = useState(initialState);

 const handleSubmit = () => {
    axios.post('http://localhost:5000/api/login', log)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        localStorage.setItem("username", log.username);
        props.history.push('/colors')
  })
      .catch(err => {
        console.error(err);
        setError(err);
      })

 }
 const handleChange = e => {
  setLog({
          ...log,
          [e.target.name]: e.target.value
  });
};
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            name='username'
            id="username"
            value={log.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={log.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
      {log.username || log.password === false ?<p id="error" className="error">{error}</p>: <div></div>}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"