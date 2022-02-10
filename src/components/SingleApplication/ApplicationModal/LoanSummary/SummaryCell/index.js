
import PropTypes from 'prop-types';
import React from "react";
import styles from "./SummaryCell.module.css";

const SummaryCell = ({ size, subTitle, children }) => {
  return (
    <div className={styles[`cell-${size}`]}>
      <sub>{ subTitle }</sub>
      { children }
    </div>
  );
};
SummaryCell.propTypes = {
  size: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  children: PropTypes.node,
}

SummaryCell.defaultProps = {
  size: 'small',
}

export default SummaryCell;
