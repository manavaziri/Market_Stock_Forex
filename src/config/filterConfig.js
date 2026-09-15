export const optionGroup = [
  "Business",
  "Grow",
  "Inflation"
];

export const optionCountry = [
  "EMU",
  "UK",
  "US"
];

export const optionImportance = [
  "Low",
  "Medium",
  "High"
];

export const optionCurrency = [
  "EURUSD",
  "GBPUSD",
  "NZDUSD"
];

export const optionTrend = [
  "Up",
  "Medium",
  "Low"
];

export const optionSignal = [
  "Strong",
  "Medium",
  "Low"
];
export const createCurrencyFilterConfig = ({
  selectedCurrency,
  setSelectedCurrency,
  selectedTrend,
  setSelectedTrend,
  selectedSignal,
  setSelectedSignal
}) => [
  {
    title: "Currency",
    field: "ticker",
    options: optionCurrency,
    selected: selectedCurrency,
    onSelect: setSelectedCurrency,
    showAllNone: true
  },

  {
    title: "Trend",
    field: "trend",
    options: optionTrend,
    selected: selectedTrend,
    onSelect: setSelectedTrend,
    showAllNone: true
  },

  {
    title: "Signal",
    field: "signal",
    options: optionSignal,
    selected: selectedSignal,
    onSelect: setSelectedSignal,
    showAllNone: true
  }
];
export const createCountryFilterConfig = ({
  selectedCountry,
  setSelectedCountry,
  selectedGroup,
  setSelectedGroup,
  selectedImportance,
  setSelectedImportance
}) => [
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
];