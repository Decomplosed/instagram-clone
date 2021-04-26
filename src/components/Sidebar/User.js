import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({ username, fullName }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className='grid items-center grid-cols-4 gap-4 mb-6'
    >
      <div className='flex items-center justify-between col-span-1'>
        <img className='flex w-16 mr-3 rounded-full' />
        <p>{username}</p>
      </div>
    </Link>
  );

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};

export default User;
