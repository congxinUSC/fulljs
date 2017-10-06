import React from 'react';
import PropTypes from 'prop-types';

// stateless component
const Header = ({ message }) => {
  return (
    <h2 className="text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: PropTypes.string
};

export default Header;