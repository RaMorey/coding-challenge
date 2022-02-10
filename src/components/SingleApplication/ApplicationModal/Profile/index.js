import PropTypes from 'prop-types';
import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ application }) => {
  const renderFullName = (first, last) => (
    `${first} ${last}`
  );
  return (
    <div className={styles.profile}>
      <img 
        className={styles['profile-picture']}
        src="https://picsum.photos/id/1025/200/200" 
        alt={`${application.last_name}'s avatar'`} 
      />
      <div className={styles['profile-metadata']}>
        <div className={styles.company}>{ application.company }</div>
        <div>{ renderFullName(application.first_name, application.last_name) }</div>
        <div>{ application.email }</div>
      </div>
    </div>
  );
};
Profile.propTypes = {
  application: PropTypes.shape({
    company: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
  })
}
export default Profile;
