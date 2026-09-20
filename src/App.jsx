import './App.css'
import { useState } from "react";
import ShowTable from './components/ShowTable'
{/*import CurrencyDetails from './CurrencyDetails'
import CurrencyDetails from './components/CurrencyDetails';*/ }
import FilterBox from './components/FilterBox'
import {
  optionGroup,
  optionCountry,
  optionImportance,
  optionCurrency,
  optionTrend,
  optionSignal,
  createCountryFilterConfig,
  createCurrencyFilterConfig
} from "./config/filterConfig";
import { countries, currencies } from "./data/marketData";
function App() {





  const [selectedGroup, setSelectedGroup] = useState(optionGroup)
  const [selectedCountry, setSelectedCountry] = useState(optionCountry)
  const [selectedImportance, setSelectedImportance] = useState(optionImportance)

  const [selectedCurrency, setSelectedCurrency] = useState(optionCurrency);
  const [selectedTrend, setSelectedTrend] = useState(optionTrend);
  const [selectedSignal, setSelectedSignal] = useState(optionSignal);

  const [selectedRow, setSelectedRow] = useState(null);
  const closeDetails = () => {
    setSelectedCountry(null);
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
  const filterConfigCountry = createCountryFilterConfig({
    selectedCountry,
    setSelectedCountry,
    selectedGroup,
    setSelectedGroup,
    selectedImportance,
    setSelectedImportance
  });
  const filterConfigCurrency = createCurrencyFilterConfig({
    selectedCurrency,
    setSelectedCurrency,
    selectedTrend,
    setSelectedTrend,
    selectedSignal,
    setSelectedSignal
  });

  {/*const filteredCurrencies = countries.filter(
    (currency) =>
      setSelectedCountry.includes(currency.ticker) &&
      selectedGroup.includes(currency.group) &&
      importanceOrder[currency.importance] >= maxImportance
  )*/}

  return (
    <>
      <h1>Forex Dashboard</h1>

      <FilterBox filters={filterConfigCountry} />
      <ShowTable
  title="Currency Market"
  data={currencies}
  headers={["Ticker", "Trend", "Signal"]}
  fields={["ticker", "trend", "signal"]}
  rowKey="ticker"
  onSelect={setSelectedRow}
  selectedKey={selectedRow?.ticker}
   

/>
      <ShowTable
        title="Country Market"
        data={countries}
        headers={["Ticker", "Country", "Group", "Importance"]}
        fields={["ticker", "country", "group", "importance"]}
        rowKey="ticker"
        onSelect={setSelectedRow}
        selectedKey={selectedRow?.ticker}
        sortableFields={["group", "importance"]}
      />

      {/*<CurrencyTable
        title="Currency Market"
        headers={["Ticker", "Group", "Importance"]}
        currencies={filteredCurrencies}
        onSelect={setSelectedCurrency}
        selectedCurrency={selectedCurrency}
      />
      {/*{selectedCurrency && (
        <CurrencyDetails />)}
      {selectedCurrency && (
        selectedCurrency.ticker)}
      {selectedCurrency &&
        <CurrencyDetails currency={selectedCurrency} onClose={closeDetails} />}*/}

    </>
  )
}

export default App
