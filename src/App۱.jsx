import './App.css'
import CurrencyTable from './components/CurrencyTable'
{/*import CurrencyDetails from './CurrencyDetails'*/ }
import CurrencyDetails from './components/CurrencyDetails';
import FilterBox from './components/FilterBox'
import { constuseState } from "react";
function App() {


  const countries = [
    { ticker: "EURUSD", country: "EMU", group: "Business", importance: "Low" },
    { ticker: "GBPUSD", country: "UK", group: "Grow", importance: "High" },
    { ticker: "JPYUSD", country: "US", group: "Grow", importance: "Medium" }
  ]
  
  const optionGroup = ["Business", "Grow", "Inflation"];
  const optionCountry = ["EUM", "UK", "US"]  
  const optionImportance = ["Low", "Medium", "High"]

  const[selectedGroup, setSelectedGroup] = useState(optionGroup)
  const [selectedCountry, setSelectedCountry] = useState(optionCountry)
  const [selectedImportance, setSelectedImportance] = useState(optionImportance)
  
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
  const filterConfigCountry = [
    {
      title: "Country",
      field: "country",
      options: optionCountry,
      selected: selectedCountry,
      onSelect: setSelectedCountry,
      showAllNone: true
    },
    {
      title: "Group",
      field: "group",
      options: optionGroup,
      selected: selectedGroup,
      onSelect: setSelectedGroup,
      showAllNone: true
    },
    {
      title: "Importance",
      field: "importance",
      options: optionImportance,
      selected: selectedImportance,
      onSelect: setSelectedImportance,
      showAllNone: false
    }
  ]
  const filteredCurrencies = countries.filter(
    (currency) =>
      setSelectedCountry.includes(currency.ticker) &&
      selectedGroup.includes(currency.group) &&
      importanceOrder[currency.importance] >= maxImportance
  )

  return (
    <>
      <h1>Forex Dashboard</h1>
 
      <FilterBox filters={filterConfigCountry} />

      <CurrencyTable
        title="Currency Market"
        headers={["Ticker", "Group", "Importance"]}
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
