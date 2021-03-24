import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

const Login = () => {
  const [emailAddress, setEmailAddress] = useState('');

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  return <div>Login</div>;
};

export default Login;
