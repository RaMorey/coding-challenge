import PropTypes from 'prop-types';
import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

const Button = ({ buttonType, className, ...buttonProps }) => {
  return (
    <button 
      className={cn(styles.button, styles[buttonType], className)} 
      {...buttonProps} 
    />
  );
};
Button.propTypes = {
  buttonType: PropTypes.string,
}

Button.defaultProps = {
  buttonType: 'primary',
}

export default Button;