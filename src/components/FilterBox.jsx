import Filter from "./Filter";

function FilterBox({optionGroup, optionCurrency, optionImportance,
    selectedGroup, selectedCurrency, selectedImportance,
    setSelectedGroup, setSelectedCurrency, setSelectedImportance}) {
    return (
        <div>
            <Filter
                title="Group"
                options={optionGroup}
                selected={selectedGroup}
                onSelect={setSelectedGroup}
                showAllNone={true}
            />
            <Filter
                title="Currency"
                options={optionCurrency}
                selected={selectedCurrency}
                onSelect={setSelectedCurrency}
                showAllNone={true}
            />
            <Filter
                title="Importances"
                options={optionImportance}
                selected={selectedImportance}
                onSelect={setSelectedImportance}
                showAllNone={false}
            />
        </div>
    )
}

export default FilterBox