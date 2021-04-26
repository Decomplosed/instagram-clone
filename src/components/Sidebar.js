import React from 'react';
import useUser from '../hooks/useUser';
import User from './user';

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser();

  return (
    <div className='p-4'>
      {/* <User /> */}
      {/* <Suggestions /> */}
    </div>
  );
};

export default Sidebar;
