import React, { useState } from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  let user = useSelector((state) => state.user.value);

  const loginUser = (e) => {
    e.preventDefault();

    if (user.email === email && user.password === password) {
      navigate('/data');
      alert('Login Successfully');
    } else {
      alert('Wrong Credential');
    }
  };
  return (
    <div>
      <div className="signup">
        <form className="signup_form">
          <h1>Login Here!!</h1>

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="submit_btn"
            type="button"
            value="Login"
            onClick={(e) => loginUser(e)}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
