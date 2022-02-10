
import PropTypes from 'prop-types';
import { React, useState, useEffect } from "react";
import LoanHistory from "./LoanHistory";
import LoanSummary from './LoanSummary';
import Profile from './Profile';
import { getApplication } from "../../api";
import { Modal } from '../../ui/Modal';
import Spinner from '../../ui/Spinner';
import styles from "./ApplicationModal.module.css";

const ApplicationModal = ({ isOpen, onClose, id }) => {
  const [applicationInfo, setInfo] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await getApplication(id);
      setInfo(data);
      setLoading(false);
    }

    loadData();
  }, [id]);

  const renderContent = () => {
    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div>
        <div className={styles.metadata}>
          <Profile application={applicationInfo} />
          <LoanSummary application={applicationInfo} />
        </div>
        <LoanHistory loanHistory={applicationInfo.loan_history} /> 
      </div>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      { renderContent() }
    </Modal>
  );
};
ApplicationModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default ApplicationModal;
