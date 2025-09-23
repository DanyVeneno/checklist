import React from 'react';
import { Check } from 'lucide-react';

export default function ChecklistItem({ item, isChecked, onToggle, showCategory = false, categoryTitle }) {
  // item can be a string or an object { id, name }
  const label = typeof item === 'string' ? item : item.name;

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
        isChecked ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
      }`}
      onClick={() => onToggle(typeof item === 'string' ? item : item.id || label)}
    >
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        isChecked ? 'bg-green-500 text-white' : 'border-2 border-gray-300'
      }`}>
        {isChecked && <Check className="w-4 h-4" />}
      </div>
      <div className="flex-1">
        <span className={`${isChecked ? 'text-green-700 line-through' : 'text-gray-700'}`}>{label}</span>
        {showCategory && categoryTitle && (
          <span className="text-sm text-gray-500 block">{categoryTitle}</span>
        )}
      </div>
    </div>
  );
}
