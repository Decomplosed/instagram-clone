import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      setActiveUser(response);
    }

    getUserObjByUserId();
  }, [user]);
};

export default useUser;
