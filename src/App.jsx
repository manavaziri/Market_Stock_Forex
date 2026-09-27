import './App.css'
import { useState } from "react";
import ShowTable from './components/ShowTable'
{/*import CurrencyDetails from './CurrencyDetails'
import CurrencyDetails from './components/CurrencyDetails';*/ }
import FilterBox from './components/FilterBox'
import DateFilter from "./components/DateFilter";
import { getDateRange } from "./utils/dateUtils";
import {
  optionGroup,
  optionCountry,
  optionImportance,
  optionCurrency,
  optionTrend,
  optionSignal,
  createCountryFilterConfig,
  createCurrencyFilterConfig,
  createEconomicFilterConfig
} from "./config/filterConfig";
import { countries, currencies } from "./data/marketData";
import Papa from "papaparse";
import economicCsv from "./data/economicData.csv?raw";
function App() {
const economicData = Papa.parse(economicCsv, {
  header: true,
  skipEmptyLines: true,
  dynamicTyping: true,
}).data;
{/*console.log("economicData:", economicData);*/}
  console.log(economicData.slice(0, 3))
  
const economicCurrencies = [
  ...new Set(economicData.map((item) => item.Currency)),
];

const economicCountries = [
  ...new Set(economicData.map((item) => item.Country)),
];

{/*const economicImpValues = [
  ...new Set(economicData.map((item) => item.Imp)),
].sort((a, b) => a - b);'createEconomicFilterConfig,'*/}
const economicImpValues = [
  ...new Set(
    economicData
      .map((item) => item.Imp)
      .filter((value) => value !== null && value !== undefined)
  ),
].sort((a, b) => a - b);
console.log("Currencies:", economicCurrencies);
console.log("Countries:", economicCountries);
console.log("Imp:", economicImpValues);


  const [selectedGroup, setSelectedGroup] = useState(optionGroup)
  const [selectedCountry, setSelectedCountry] = useState(optionCountry)
  const [selectedImportance, setSelectedImportance] = useState(optionImportance)
const [selectedEconomicCurrency, setSelectedEconomicCurrency] =
  useState(economicCurrencies);

const [selectedEconomicCountry, setSelectedEconomicCountry] =
  useState(economicCountries);
  

const [selectedEconomicImp, setSelectedEconomicImp] =
  useState(economicImpValues);
  const economicFilters = createEconomicFilterConfig({
  selectedEconomicCurrency,
  setSelectedEconomicCurrency,
  selectedEconomicCountry,
  setSelectedEconomicCountry,
  selectedEconomicImp,
  setSelectedEconomicImp,
  economicCurrencies,
  economicCountries,
  economicImpValues,
});
  const [selectedCurrency, setSelectedCurrency] = useState(optionCurrency);
  const [selectedTrend, setSelectedTrend] = useState(optionTrend);
  const [selectedSignal, setSelectedSignal] = useState(optionSignal);

  const [selectedRow, setSelectedRow] = useState(null);
  const closeDetails = () => {
    setSelectedCountry(null);
  };
{/*const initialDateRange = getDateRange("thisWeek");

const [dateRange, setDateRange] = useState(initialDateRange);
  const [dateRange, setDateRange] = useState({
    from: null,
    to: null,
  });*/}
  const [dateRange, setDateRange] = useState(
  getDateRange("thisWeek")
);
{/*const filteredEconomicData = economicData.filter((item) => {
  if (!dateRange.from && !dateRange.to) {
    return true;
  }

  if (dateRange.from && !dateRange.to) {
    return item.Daten >= dateRange.from;
  }

  if (!dateRange.from && dateRange.to) {
    return item.Daten <= dateRange.to;
  }

  return (
    item.Daten >= dateRange.from &&
    item.Daten <= dateRange.to
  );
});*/}
console.log("Selected Currency۱:", selectedEconomicCurrency);
console.log("Selected Country۱:", selectedEconomicCountry);
console.log("Selected Imp۱:", selectedEconomicImp);

console.log("First row:", economicData[0]);
const filteredEconomicData = economicData.filter((item) => {
  // Date
  if (dateRange.from && item.Daten < dateRange.from) {
    return false;
  }

  if (dateRange.to && item.Daten > dateRange.to) {
    return false;
  }

  // Currency
  if (!selectedEconomicCurrency.includes(item.Currency)) {
    return false;
  }

  // Country
  if (!selectedEconomicCountry.includes(item.Country)) {
    return false;
  }

  // Importance
  if (!selectedEconomicImp.includes(item.Imp)) {
    return false;
  }

  return true;
});
console.log("All economic data:", economicData.length);
console.log("Filtered economic data:", filteredEconomicData.length);
console.log(dateRange);
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
  const filteredData = economicData.filter((item) => {

  if (!dateRange.from && !dateRange.to) {
    return true;
  }

  if (dateRange.from && !dateRange.to) {
    return item.date >= dateRange.from;
  }

  if (!dateRange.from && dateRange.to) {
    return item.date <= dateRange.to;
  }

  return (
    item.date >= dateRange.from &&
    item.date <= dateRange.to
  );
});

  return (
    <>
      <h1>Forex Dashboard</h1>

      /{/*<FilterBox filters={filterConfigCountry} />*/}
      <FilterBox filters={economicFilters} />
      <DateFilter onDateChange={setDateRange} />
      <pre>
        {JSON.stringify(dateRange, null, 2)}
      </pre>
      {/*<ShowTable
        title="Currency Market"
        data={currencies}
        headers={["Ticker", "Trend", "Signal"]}
        fields={["ticker", "trend", "signal"]}
        rowKey="ticker"
        onSelect={setSelectedRow}
        selectedKey={selectedRow?.ticker}


      />*/}
      {/*<ShowTable
  title="Economic Data"
  data={filteredEconomicData}
  headers={[
    "Date",
    "Currency",
    "Title",
    "Actual",
    "Previous",
    "Imp",
    "Country",
  ]}
  fields={[
    "Daten",
    "Currency",
    "Title",
    "Actual",
    "Previous",
    "Imp",
    "Country",
  ]}
  rowKey="Title"
/>*/}
<ShowTable
  title="Economic Data"
  data={filteredEconomicData}
  headers={[
    "Date",
    "Currency",
    "Title",
    "Case",
    "Mean3",
    "Mean6",
    "Imp",
    "Country",
  ]}
  fields={[
    "Daten",
    "Currency",
    "Title",
    "Case",
    "Mean3",
    "Mean6",
    "Imp",
    "Country",
  ]}
  rowKey="Title"
  sortableFields={[
    "Daten",
    "Currency",
    "Case",
    "Mean3",
    "Mean6",
    "Imp",
    "Country",
  ]}
  numericFields={[
    "Mean3",
    "Mean6",
    "Imp",
  ]}
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
