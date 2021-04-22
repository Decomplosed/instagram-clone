import React, { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROTUES from '../constants/routes';

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return <div>HEADER COMPONENT</div>;
};

export default Header;
