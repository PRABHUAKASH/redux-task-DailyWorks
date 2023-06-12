import React, { useState } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../store/data';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let userData = { id: new Date().getTime(),name, email, password, signIn: true };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector((state) => state.user.value);

  const signupUser = (e) => {
    e.preventDefault();

    dispatch(signup(userData));
    navigate('/login');
    console.log(user);
    alert('SignUp Successfull');
  };
  return (
    <div>
      <div className="signup">
        <form className="signup_form">
          <h1>Signup Here!!!</h1>
          <input
            type="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            value="Signup"
            onClick={(e) => signupUser(e)}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
