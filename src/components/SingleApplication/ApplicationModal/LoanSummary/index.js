import moment from 'moment';
import PropTypes from 'prop-types';
import React from "react";
import SummaryCell from "./SummaryCell";
import { renderCurrency } from "../../../../helpers";
import styles from './LoanSummary.module.css';

const LoanSummary = ({ application }) => {
  return (
    <div className={styles['loan-summary']}>
      <SummaryCell size="large" subTitle="Loan Amount">
        { renderCurrency(application.loan_amount) }
      </SummaryCell>
      <div className={styles['small-cells']}>
        <SummaryCell subTitle="Product">{ application.loan_type }</SummaryCell>
        <SummaryCell subTitle="Application Date">{ moment(application.date_created).format('DD-MM-YYYY') }</SummaryCell>
        <SummaryCell subTitle="Expiry Date">{ moment(application.expiry_date).format('DD-MM-YYYY') }</SummaryCell>
      </div>
    </div>
  );
};
LoanSummary.propTypes = {
  application: PropTypes.shape({
    loan_amount: PropTypes.number,
    loan_type: PropTypes.string,
    date_created: PropTypes.string,
    expiry_date: PropTypes.string,
  })
}

export default LoanSummary;
