import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Login = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className='container flex items-center h-screen max-w-screen-md mx-auto'>
      <div className='flex w-3/5'>
        <img
          src='/images/iphone-with-profile.jpg'
          alt='iPhone with Instagram'
        />
      </div>
      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center p-4 mb-4 bg-white border rounded border-gray-primary'>
          <h1 className='flex justify-center w-full'>
            <img
              src='/images/logo.png'
              alt='Instagram'
              className='w-6/12 mt-2 mb-4'
            />
          </h1>
          {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

          <form onSubmit={handleLogin} method='POST'>
            <input
              aria-label='Enter your email address'
              type='text'
              placeholder='Email Address'
              className='w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded text-gray-base border-gray-primary'
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <input
              aria-label='Enter your password'
              type='password'
              placeholder='Password'
              className='w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded text-gray-base border-gray-primary'
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type='submit'
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className='flex flex-col items-center justify-center w-full p-4 bg-white border rounded border-gray-primary'>
          <p className='text-sm'>
            Don't have an account?{` `}
            <Link to={ROUTES.SIGN_UP} className='font-bold text-blue-medium'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
