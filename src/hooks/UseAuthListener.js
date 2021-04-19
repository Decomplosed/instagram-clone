import React, { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

const UseAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser')),
  );
};

export default UseAuthListener;
