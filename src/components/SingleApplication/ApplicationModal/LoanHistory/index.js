import moment from 'moment';
import PropTypes from 'prop-types';
import React from "react";
import { renderCurrency } from '../../../../helpers';
import styles from './LoanHistory.module.css';

const LoanHistory = ({ loanHistory }) => {
  const tableHeaders = ['Start date', 'End date', 'Principal', 'Interest', 'Repayment'];
  const renderRow = (loan, loanNumber) => {
    return (
      <tr key={`Loan Number ${loanNumber}`}>
        <td>{ moment(loan.loan_started).format('DD MMM YYYY') }</td>
        <td>{ moment(loan.loan_ended).format('DD MMM YYYY') }</td>
        <td>{ renderCurrency(loan.principle) }</td>
        <td>{ renderCurrency(loan.interest, true) }</td>
        <td>{ renderCurrency(loan.principle + loan.interest, true) }</td>
      </tr>
    )
  }

  return (
    <div className={styles['loan-history']}>
      <h2>Loan History</h2>
      <table>
        <thead>
          <tr>{ tableHeaders.map(header => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          { loanHistory.map((loan, i) => renderRow(loan, i))}
        </tbody>
      </table>
    </div>
  );
};
LoanHistory.propTypes = {
  loanHistory: PropTypes.arrayOf(PropTypes.shape({
    loan_started: PropTypes.string,
    loan_ended: PropTypes.string,
    principle: PropTypes.number,
    interest: PropTypes.number,
  }))
}

export default LoanHistory;
