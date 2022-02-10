import moment from 'moment';
import PropTypes from 'prop-types';
import { React, useState } from "react";
import ApplicationCell from "./ApplicationCell";
import ApplicationModal from './ApplicationModal';
import { renderCurrency } from "../../helpers";
import { Clickable } from '../ui/Clickable';
import styles from "./SingleApplication.module.css";

const SingleApplication = ({ application }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Clickable className={styles.clickable} onClick={openModal}>
        <div className={styles.SingleApplication}>
          <ApplicationCell subTitle="Company">
            {application.company}
          </ApplicationCell>
          <ApplicationCell subTitle="Name">
            {application.first_name} {application.last_name}
          </ApplicationCell>
          <ApplicationCell subTitle="Email">
            {application.email}
          </ApplicationCell>
          <ApplicationCell subTitle="Loan Amount">
            { renderCurrency(application.loan_amount) }
          </ApplicationCell>
          <ApplicationCell subTitle="Application Date">
            { moment(application.date_created).format('Do MMMM YYYY') }
          </ApplicationCell>
          <ApplicationCell subTitle="Expiry date">
            { moment(application.expiry_date).format('Do MMMM YYYY') }
          </ApplicationCell>
        </div>
      </Clickable>
      { modalIsOpen && (
        <ApplicationModal 
          id={application.id} 
          isOpen={modalIsOpen} 
          onClose={closeModal}
        />
      )}
    </>
  );
};
SingleApplication.propTypes = {
  application: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    loan_amount: PropTypes.number,
    expiry_date: PropTypes.string,
  })
}

export default SingleApplication;
