import React, { memo } from 'react';
import useUser from '../../hooks/useUser';
import User from './User';
import Suggestions from './Suggestions';

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser();

  return (
    <div className='p-4'>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
};

export default memo(Sidebar);
