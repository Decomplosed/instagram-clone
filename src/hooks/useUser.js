import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {}, []);
};

export default useUser;
