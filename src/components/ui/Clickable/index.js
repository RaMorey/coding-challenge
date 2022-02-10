import PropTypes from 'prop-types';
import React from "react";
import cn from "classnames";
import styles from "./Clickable.module.css";

export const Clickable = ({ className, ...buttonProps }) => {
  return (
    <button 
      className={cn(styles.clickable, className)} 
      {...buttonProps} 
    />
  );
};

Clickable.propTypes = {
  className: PropTypes.string,
}

export default Clickable;