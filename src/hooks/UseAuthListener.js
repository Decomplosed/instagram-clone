import React, { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

const UseAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser')),
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {}, []);
};

export default UseAuthListener;
