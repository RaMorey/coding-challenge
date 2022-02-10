import PropTypes from 'prop-types';
import React from "react";

const CrossIcon = ({ className, height, ...iconProps }) => {
  return (
    <svg 
      className={className} 
      viewBox="6 6 12 12" 
      height={height} 
      width={height} 
      aria-hidden
      {...iconProps}
    >
      <path d="M7.324 6L6 7.324l4.715 4.716-4.677 4.676 1.205 1.204 4.677-4.677L16.675 18 18 16.675l-4.756-4.755 4.675-4.676-1.203-1.204-4.677 4.675L7.324 6z" />
    </svg>
  );
};
CrossIcon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
}

CrossIcon.defaultProps = {
  height: 16,
}

export default CrossIcon;