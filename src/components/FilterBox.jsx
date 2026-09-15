import Filter from "./Filter";

function FilterBox({ filters }) {
  return (
    <div>
      {filters.map((filter) => (
        <Filter
          key={filter.field}
          title={filter.title}
          options={filter.options}
          selected={filter.selected}
          onSelect={filter.onSelect}
          showAllNone={filter.showAllNone}
        />
      ))}
    </div>
  );
}

export default FilterBox;

 