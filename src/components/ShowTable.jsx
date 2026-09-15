import TableRow from "./TableRow.jsx";
function ShowTable({
  title,
  data,
  headers,
  fields,

   
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
          {data.map((obj) => (
            <TableRow
              key={obj.ticker}
              data={obj}
              fields={fields}
            />
          ))}
        </tbody>
        <tfoot>
        {/* فعلاً خالی */}
      </tfoot>

    </table>
    </div >
  );
}

export default ShowTable;