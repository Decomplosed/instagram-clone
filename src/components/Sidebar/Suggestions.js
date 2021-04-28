import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Suggestions = () => {
  const [profiles, setProfiles] = useState(null);

  return <p>SUGGESTIONS COMPONENT</p>;
};

Suggestions.propTypes = {
  userId: PropTypes.string,
};

export default Suggestions;
