import React, { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

const UseAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser')),
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authListener) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
      }
    });
  }, []);

  return { user };
};

export default UseAuthListener;
