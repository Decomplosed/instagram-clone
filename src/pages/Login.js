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
          src='/images/iphone-with-profile.jpg'
          alt='iPhone with Instagram'
        />
      </div>
      <div className='flex flex-col w-2/5'>
        <h1 className='flex justify-center w-full'>
          <img
            src='/images/logo.png'
            alt='Instagram'
            className='mt-2 w-6/12 mb-4'
          />
        </h1>
      </div>
    </div>
  );
};

export default Login;
