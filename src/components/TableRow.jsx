 
function TableRow({ data, fields }) {
  return (
    <tr>
      {fields.map((field) => (
        <td key={field}>
          {data[field]}
        </td>
      ))}
    </tr>
  );
}


export default TableRow