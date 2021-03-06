import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);

  return !profiles ? (
    <Skeleton count={1} height={150} className='mt-5' />
  ) : profiles.length > 0 ? (
    <div className='flex flex-col rounded'>
      <div className='flex items-center justify-between mb-2 text-sm align-items'>
        <p className='text-bold text-gray-base'>Suggestions for you</p>
      </div>
    </div>
  ) : null;
};

Suggestions.propTypes = {
  userId: PropTypes.string,
};

export default Suggestions;
