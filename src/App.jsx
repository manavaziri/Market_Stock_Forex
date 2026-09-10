import './App.css'
import CurrencyTable from './components/CurrencyTable'
{/*import CurrencyDetails from './CurrencyDetails'*/ }
import CurrencyDetails from './components/CurrencyDetails';
import Filter from "./components/Filter";
import { useState } from "react";
function App() {
  const currencies = [
    { ticker: "EURUSD", trend: "Up", signal: "Strong" },
    { ticker: "GBPUSD", trend: "Down", signal: "Weak" },
    { ticker: "USDJPY", trend: "Middle", signal: "Normal" }
  ]
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(["All"]);

  const closeDetails = () => {
    setSelectedCurrency(null);
  };
  return (
    <>
      <h1>Forex Dashboard</h1>

      {/*<table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Trend</th>
            <th>Signal</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((obj) => (
            <CurrencyRow
              key={obj.ticker}
              currency={obj}
              onSelect={setSelectedCurrency}
              selected={selectedCurrency?.ticker === obj.ticker}

            />
          ))}
        </tbody>

      </table>*/}
      {/*<Filter
        title="Group"
        options={["All", "Up", "Middle", "Down","None"]}
        Group={selectedGroup}
        onSelect={setSelectedGroup}
      />*/}
      <CurrencyTable
        title="Currency Market"
        headers={["Ticker", "Trend", "Signal"]}
        currencies={currencies}
        onSelect={setSelectedCurrency}
        selectedCurrency={selectedCurrency}
      />
      {/*{selectedCurrency && (
        <CurrencyDetails />)}*/}
      {selectedCurrency && (
        selectedCurrency.ticker)}
      {selectedCurrency &&
        <CurrencyDetails currency={selectedCurrency} onClose={closeDetails} />}

    </>
  )
}

export default App
