function Filter({ title, options, selected, onSelect, showAllNone }) {
  const toggle = (value) => {
    // ALL
    if (value === "all") {
      onSelect(options); // همه انتخاب شوند
      return;
    }

    // NONE
    if (value === "none") {
      onSelect([]); // همه حذف شوند
      return;
    }

    // OTHER OPTIONS
    const newState = selected.includes(value)
      ? selected.filter((item) => item !== value) // حذف
      : [...selected, value]; // اضافه

    onSelect(newState);
  };

  return (
    <div>
      <label>{title}</label>

      <div>
        {showAllNone && (
          <>
            <label>
              <input
                type="checkbox"
                checked={selected.length === options.length}
                onChange={() => toggle("all")}
              />
              All
            </label>

            <label>
              <input
                type="checkbox"
                checked={selected.length === 0}
                onChange={() => toggle("none")}
              />
              None
            </label>
          </>)}
        {
          options.map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggle(opt)}
              />
              {opt}
            </label>
          ))}
      </div >
    </div >
  );
}


export default Filter;