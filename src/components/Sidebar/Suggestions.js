import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Suggestions = () => {
  const [profiles, setProfiles] = useState(null);

  return !profiles ? <></> : <></>;
};

Suggestions.propTypes = {
  userId: PropTypes.string,
};

export default Suggestions;
