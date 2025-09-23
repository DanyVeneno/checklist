import React from 'react';

export default function SearchControls({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories, onReset, onExport, onExportPDF }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Buscar elementos..."
          className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">Todas las categorías</option>
        {Object.entries(categories).map(([key, category]) => (
          <option key={key} value={key}>{category.title}</option>
        ))}
      </select>

      <div className="flex gap-2">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Reiniciar
        </button>
        <button
          onClick={onExport}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Exportar txt
        </button>
        <button
          onClick={onExportPDF}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Exportar PDF
        </button>
      </div>
    </div>
  );
}
