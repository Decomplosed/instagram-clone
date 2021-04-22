import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROTUES from '../constants/routes';

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <header className='h=16 bg-white border-b border-gray-primary mb-8'>
      HEADER COMPONENT
    </header>
  );
};

export default Header;
