import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Signup = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  return <p>Signup</p>;
};

export default Signup;
