import { useState } from "react";
import { getDateRange } from "../utils/dateUtils";

function DateFilter({ onDateChange }) {

  const initialRange = getDateRange("thisWeek");

  const [selectedOption, setSelectedOption] = useState("thisWeek");

  const [dateFrom, setDateFrom] = useState(initialRange.from);

  const [dateTo, setDateTo] = useState(initialRange.to);


  const handlePresetChange = (e) => {

    const option = e.target.value;

    setSelectedOption(option);


    if (option === "custom") {
      return;
    }


    const range = getDateRange(option);

    setDateFrom(range.from || "");

    setDateTo(range.to || "");

    onDateChange(range);
  };


  const handleFromChange = (e) => {

    const value = e.target.value;

    setDateFrom(value);

    onDateChange({
      from: value || null,
      to: dateTo || null,
    });
  };


  const handleToChange = (e) => {

    const value = e.target.value;

    setDateTo(value);

    onDateChange({
      from: dateFrom || null,
      to: value || null,
    });
  };


  return (
    <div className="date-filter">

      <label>Date</label>


      <select
        value={selectedOption}
        onChange={handlePresetChange}
      >

        <option value="all">
          All Dates
        </option>

        <option value="today">
          Today
        </option>

        <option value="yesterday">
          Yesterday
        </option>

        <option value="thisWeek">
          This Week
        </option>

        <option value="lastWeek">
          Last Week
        </option>

        <option value="thisMonth">
          This Month
        </option>

        <option value="lastMonth">
          Last Month
        </option>

        <option value="custom">
          Custom Range
        </option>

      </select>


      <label>
        Date From

        <input
          type="date"
          value={dateFrom || ""}
          onChange={handleFromChange}
          disabled={selectedOption !== "custom"}
        />

      </label>


      <label>
        Date To

        <input
          type="date"
          value={dateTo || ""}
          onChange={handleToChange}
          disabled={selectedOption !== "custom"}
        />

      </label>

    </div>
  );
}

export default DateFilter;