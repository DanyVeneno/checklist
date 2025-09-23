import React from 'react';
import ChecklistItem from './ChecklistItem';

export default function CategorySection({ category, categoryItems, checkedItems, onToggleItem, completedInCategory }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`${category.color} p-4`}>
        <div className="flex items-center justify-between text-white">
          <h3 className="text-xl font-semibold">{category.title}</h3>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
            {completedInCategory}/{categoryItems.length}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="grid gap-3">
          {categoryItems.map((item) => (
            <ChecklistItem
              key={item}
              item={item}
              isChecked={checkedItems.has(item)}
              onToggle={onToggleItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
