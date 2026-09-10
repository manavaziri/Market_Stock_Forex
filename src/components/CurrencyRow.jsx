function CurrencyRow1({ currency }) {
  return (
    <tr>
      <td>{currency.ticker}</td>
      <td>{currency.trend}</td>
      <td>{currency.signal}</td>
    </tr>
  )
}


function CurrencyRow۲({ currency }) {
  const { ticker, trend, signal } = currency;

  return (
    <tr>
      <td>{ticker}</td>
      <td>{trend}</td>
      <td>{signal}</td>
    </tr>
  );
}
function CurrencyRow۳({ currency, onSelect }) {
  return (
    <tr onClick={() => onSelect(currency)}>
      <td>{currency.ticker}</td>
      <td>{currency.trend}</td>
      <td>{currency.signal}</td>
    </tr>
  );
}
function CurrencyRow({ currency, onSelect, selected }) {
  return (
    <tr
      className={selected ? "selected" : ""}
      onClick={() => onSelect(currency)}
    >
      <td>{currency.ticker}</td>
      <td>{currency.trend}</td>
      <td>{currency.signal}</td>
    </tr>
  );
}
export default CurrencyRow