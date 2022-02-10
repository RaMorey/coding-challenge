export function renderCurrency(amount, withDecimals) {
  const formattingParams = {
    style: 'currency',
    currency: 'GBP',
  };

  if (!withDecimals) {
    formattingParams.minimumFractionDigits = 0;
    formattingParams.maximumFractionDigits = 0;
  };

  const currencyFormatter = new Intl.NumberFormat('en-GB', {
    ...formattingParams,
  });

  return (
    currencyFormatter.format(amount)
  );
};

