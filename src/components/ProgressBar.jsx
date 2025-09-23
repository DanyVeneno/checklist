import React from 'react';

export default function ProgressBar({ progress = 0, checkedCount = 0, totalItems = 0 }) {
  return (
    <div>
      <div className="bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-center">
        <span className="text-lg font-semibold text-gray-700">
          {checkedCount} de {totalItems} elementos completados ({progress}%)
        </span>
      </div>
    </div>
  );
}
