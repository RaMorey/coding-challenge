import PropTypes from 'prop-types';
import React from "react";
import styles from "../SingleApplication.module.css";

const ApplicationCell = ({ subTitle, children }) => {
  return (
    <div className={styles.cell}>
      <sub>{ subTitle }</sub>
      { children }
    </div>
  );
};
ApplicationCell.propTypes = {
  subTitle: PropTypes.string,
  children: PropTypes.node,
}

export default ApplicationCell;
