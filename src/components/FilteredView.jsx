import React from "react";
import ChecklistItem from "./ChecklistItem";

const FilteredView = ({ filteredItems, checkedItems, onToggleItem }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-semibold text-gray-800 mb-4'>
        {filteredItems.length} elemento{filteredItems.length !== 1 ? "s" : ""}{" "}
        encontrado{filteredItems.length !== 1 ? "s" : ""}
      </h3>
      <div className='grid gap-3'>
        {filteredItems.map(({ item, categoryTitle }) => (
          <ChecklistItem
            key={item}
            item={item}
            categoryTitle={categoryTitle}
            isChecked={checkedItems.has(item)}
            onToggle={onToggleItem}
            showCategory={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredView;
