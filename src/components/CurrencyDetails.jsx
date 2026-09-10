
function CurrencyDetails({ currency, onClose }) {
  return (
    <div>
      <h2>Selected: {currency.ticker}</h2>
      <p>Trend: {currency.trend}</p>
      <p>Signal: {currency.signal}</p>

      <button onClick={onClose}>Close</button>
    </div>
  );
}
export default CurrencyDetails
