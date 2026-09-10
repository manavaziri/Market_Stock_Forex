import CurrencyRow from "./CurrencyRow";

function CurrencyTable({
  title,
  headers,
  currencies,
  onSelect,
  selectedCurrency
}) {
  return (
    <div>
      <h2>{title}</h2>

      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currencies.map((obj) => (
            <CurrencyRow
              key={obj.ticker}
              currency={obj}
              onSelect={onSelect}
              selected={selectedCurrency?.ticker === obj.ticker}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyTable;