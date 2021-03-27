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
        {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

        <form onSubmit={handleLogin} method='POST'>
          <input
            aria-label='Enter your email address'
            type='text'
            placeholder='Email Address'
            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <input
            aria-label='Enter your password'
            type='password'
            placeholder='Password'
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
