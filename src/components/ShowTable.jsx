import { useState } from "react";
import TableRow from "./TableRow";
function ShowTable({
  title,
  data,
  headers,
  fields,
  rowKey,
  onSelect,
  selectedKey,
  sortableFields = [],

}) {
  {/*const [sortConfig, setSortConfig] = useState({});
  const handleSort = (field, direction) => {
    setSortConfig((prev) => ({
      ...prev,
      [field]: direction,
    }));
  };

  const sortedData۱ = [...data].sort((a, b) => {
    const field = Object.keys(sortConfig)[0];

    if (!field || sortConfig[field] === "0") {
      return 0;
    }

    const direction = sortConfig[field];

    if (a[field] < b[field]) {
      return direction === "+" ? -1 : 1;
    }

    if (a[field] > b[field]) {
      return direction === "+" ? 1 : -1;
    }

    return 0;
  });
  const importanceOrder = {
    Low: 1,
    Medium: 2,
    High: 3,
  };

  const sortedData = [...data].sort((a, b) => {
    const field = Object.keys(sortConfig)[0];

    if (!field || sortConfig[field] === "0") {
      return 0;
    }

    const direction = sortConfig[field];

    let valueA = a[field];
    let valueB = b[field];

    if (field === "importance") {
      valueA = importanceOrder[valueA];
      valueB = importanceOrder[valueB];
    }

    if (valueA < valueB) {
      return direction === "+" ? -1 : 1;
    }

    if (valueA > valueB) {
      return direction === "+" ? 1 : -1;
    }

    return 0;
  });*/ }
  const [sortConfig, setSortConfig] = useState([]);

  const handleSort = (field, direction) => {
    setSortConfig((prev) => {
      if (direction === "0") {
        return prev.filter((item) => item.field !== field);
      }

      const exists = prev.some((item) => item.field === field);

      if (exists) {
        return prev.map((item) =>
          item.field === field
            ? { ...item, direction }
            : item
        );
      }

      return [...prev, { field, direction }];
    });
  };
  const importanceOrder = {
    Low: 1,
    Medium: 2,
    High: 3,
  };

  const sortedData = [...data].sort((a, b) => {
    for (const sort of sortConfig) {
      const { field, direction } = sort;

      let valueA = a[field];
      let valueB = b[field];

      if (field === "importance") {
        valueA = importanceOrder[valueA];
        valueB = importanceOrder[valueB];
      }

      if (valueA < valueB) {
        return direction === "+" ? -1 : 1;
      }

      if (valueA > valueB) {
        return direction === "+" ? 1 : -1;
      }
    }

    return 0;
  });

  return (
    <div>
      <h2>{title}</h2>


      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={header}>
                {header}

                {sortableFields.includes(fields[index]) && (
                  <span className="sort-buttons">
                    {/* <button onClick={() => handleSort(fields[index], "+")}>
                      +
                    </button>*/}
                    <button
                      className={
                        sortConfig.some(
                          (item) =>
                            item.field === fields[index] &&
                            item.direction === "+"
                        )
                          ? "active-sort"
                          : ""
                      }
                      onClick={() => handleSort(fields[index], "+")}
                    >
                      +
                    </button>

                    <button
                      className={
                        sortConfig.some(
                          (item) =>
                            item.field === fields[index] &&
                            item.direction === "-"
                        )
                          ? "active-sort"
                          : ""
                      }
                      onClick={() => handleSort(fields[index], "-")}
                    >
                      -
                    </button>

                    <button onClick={() => handleSort(fields[index], "0")}>
                      0
                    </button>
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedData.map((obj) => (
            <TableRow
              key={obj[rowKey]}
              data={obj}
              fields={fields}
              onSelect={onSelect}
              selected={selectedKey === obj[rowKey]}
            />
          ))}
        </tbody>
        <tfoot>
          {/* فعلاً خالی */}
        </tfoot>

      </table >
    </div >
  );
}

export default ShowTable;
{/*selected={selectedKey === obj[rowKey]}learn*/ }