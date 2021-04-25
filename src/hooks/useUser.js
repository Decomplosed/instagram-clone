import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { userUserByUserId } from '../services/firebase';

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const response = await getUserObjByUserId(user.uid);
      setActiveUser(response);
    }

    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
};

export default useUser;
