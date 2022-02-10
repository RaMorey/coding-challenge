import PropTypes from 'prop-types';
import React from "react";
import cn from "classnames";
import styles from "./Spinner.module.css";

const Spinner = ({ className, ...props }) => {
  const classNames = cn(styles.spinner, className);

  return (
    <div aria-label="loading" className={classNames} role="img" {...props}>
      <div className={styles['spinner-inner']}>
        <div className={styles.bounce1} />
        <div className={styles.bounce2} />
        <div className={styles.bounce3} />
      </div>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
}
export default Spinner;