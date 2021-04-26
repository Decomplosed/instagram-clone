import React from 'react';
import useUser from '../hooks/useUser';

const Sidebar = () => {
  const { user } = useUser();

  return <div>SIDEBAR COMPONENT</div>;
};

export default Sidebar;
