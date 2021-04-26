import React from 'react';
import useUser from '../hooks/useUser';

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser();

  return <div className='p-4'></div>;
};

export default Sidebar;
