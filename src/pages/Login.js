import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

const Login = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className='container flex mx-auo max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'>
        <img
          src='/images/iphone-with-profile.jps'
          alt='iPhone with Instagram'
        />
      </div>
    </div>
  );
};

export default Login;
