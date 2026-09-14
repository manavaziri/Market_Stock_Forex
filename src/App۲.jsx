import './App.css'
import CurrencyTable from './components/CurrencyTable'
{/*import CurrencyDetails from './CurrencyDetails'*/ }
import CurrencyDetails from './components/CurrencyDetails';
import FilterBox from './components/FilterBox'
import { useState } from "react";
function App() {

  const filterConfigCountry = [
  {
    title: "Country",
    field: "country",
    options: optionCountry,
    showAllNone: true
  },
  {
    title: "Group",
    field: "group",
    options: optionGroup,
    showAllNone: true
  },
  {
    title: "Importance",
    field: "importance",
    options: optionImportance,
    showAllNone: false
  }
]
const filterConfigCurrency = [
  {
    title: "Currency",
    field: "ticker",
    options: optionCurrency,
    showAllNone: true
  },
  {
    title: "Trend",
    field: "trend",
    options: optionTrend,
    showAllNone: true
  },
  {
    title: "Signal",
    field: "signal",
    options: optionSignal,
    showAllNone: true
  }
]
  const countries = [
    { ticker: "EUR", country:"EUM",group: "Business", importance: "Low" },
    { ticker: "GBP", country:"UK",group: "Grow", importance: "High" },
    { ticker: "USD", country:"US",group: "Grow", importance: "Medium" }
  ]
  currencies=[
    {ticker: "EURUSD",country: "EUM",  trend: "Up",  signal: "Strong"},
    {ticker: "GBPUSD",country: "UK",  trend: "Low",  signal: "Medium"},
    {ticker: "NZDUSD",country: "NZD",  trend: "Medium",  signal: "Low"}
    ]
  const [selectedCurrency, setSelectedCurrency] = useState(["ALL"]);
  const [selectedGroup, setSelectedGroup] = useState(["All"]);
  const [selectedImportance, setSelectedImportance] = useState(["High"]);

  const optionGroup = ["Business", "Grow", "Inflation"];
  const optionCurrency = ["EURUSD", "GBPUSD", "USDJPY"]
  const optionImportance = ["Low", "Medium", "High"]

  const closeDetails = () => {
    setSelectedCurrency(null);
  };
  const importanceOrder = {
    "Low": 1,
    "Medium": 2,
    "High": 3
  }
  const maxImportance = Math.max(
    ...selectedImportance.map(
      (item) => importanceOrder[item]
    )
  )
  const getField = (item, field) => item[field]

  const filteredCurrencies1 = currencies.filter(
    (currency) =>
      selectedCurrency.includes(currency.ticker) &&
      selectedGroup.includes(currency.group) &&
      importanceOrder[currency.importance] >= maxImportance
  )
  const filteredCurrencies = currencies.filter(
  (currency) =>
    selectedCurrency.includes(getField(currency, "ticker")) &&
    selectedGroup.includes(getField(currency, "group")) &&
    importanceOrder[getField(currency, "importance")] >= maxImportance
)
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
      <FilterBox
        optionGroup={optionGroup}
        optionCurrency={optionCurrency}
        optionImportance={optionImportance}
        selectedGroup={selectedGroup}
        selectedCurrency={selectedCurrency}
        selectedImportance={selectedImportance}
        setSelectedGroup={setSelectedGroup}
        setSelectedCurrency={setSelectedCurrency}
        setSelectedImportance={setSelectedImportance}

      />


      <CurrencyTable
        title="Currency Market"
        headers={["Ticker", "Group", "Signal"]}
        currencies={filteredCurrencies}
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
