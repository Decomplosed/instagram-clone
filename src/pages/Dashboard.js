import React, { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return <div></div>;
};

export default Dashboard;
