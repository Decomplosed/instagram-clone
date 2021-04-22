import React, { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';

const Header = () => {
  const { firebase } = useContext(FirebaseContext);

  return <div>HEADER COMPONENT</div>;
};

export default Header;
