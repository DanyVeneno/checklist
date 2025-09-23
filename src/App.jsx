import React, { useState, useMemo, useEffect } from "react";
import { categories, getAllItems } from "./data/categories";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { exportChecklist } from "./utils/exportUtils";
import Header from "./components/Header";
import SearchControls from "./components/SearchControls";
import CategorySection from "./components/CategorySection";
import FilteredView from "./components/FilteredView";
import Footer from "./components/Footer";

const FirstAidKitApp = () => {
  const [checkedItems, setCheckedItems] = useLocalStorage(
    "first-aid-checklist",
    new Set()
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const allItems = useMemo(() => getAllItems(), []);
  const totalItems = allItems.length;

  const filteredItems = useMemo(() => {
    return allItems.filter(({ item, categoryTitle, category }) => {
      const matchesSearch =
        item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        categoryTitle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || selectedCategory === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, allItems]);

  const toggleItem = (item) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(item)) {
      newCheckedItems.delete(item);
    } else {
      newCheckedItems.add(item);
    }
    setCheckedItems(newCheckedItems);
  };

  const getProgress = () => {
    return Math.round((checkedItems.size / totalItems) * 100);
  };

  const resetChecklist = () => {
    setCheckedItems(new Set());
  };

  const handleExport = () => {
    exportChecklist(checkedItems, getAllItems, getProgress);
  };

  const handleExportPDF = () => {
    // dynamic import to keep bundle small
    import('./utils/exportUtils').then(mod => {
      if (mod.exportChecklistPDF) mod.exportChecklistPDF(checkedItems, getAllItems, getProgress);
    });
  };

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const progress = getProgress();

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
      <Header
        progress={progress}
        checkedCount={checkedItems.size}
        totalItems={totalItems}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className='max-w-4xl mx-auto px-6 py-6'>
        {/* Controls */}
        <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
          <SearchControls
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            onReset={resetChecklist}
            onExport={handleExport}
            onExportPDF={handleExportPDF}
          />
        </div>

        {/* Items List */}
        <div className='space-y-4'>
          {selectedCategory === "all" ? (
            // Category view
            Object.entries(categories).map(([categoryKey, category]) => {
              const categoryItems = category.items.filter((item) =>
                item.toLowerCase().includes(searchTerm.toLowerCase())
              );

              const completedInCategory = categoryItems.filter((item) =>
                checkedItems.has(item)
              ).length;

              return (
                <CategorySection
                  key={categoryKey}
                  categoryKey={categoryKey}
                  category={category}
                  categoryItems={categoryItems}
                  checkedItems={checkedItems}
                  onToggleItem={toggleItem}
                  completedInCategory={completedInCategory}
                />
              );
            })
          ) : (
            // Filtered view
            <FilteredView
              filteredItems={filteredItems}
              checkedItems={checkedItems}
              onToggleItem={toggleItem}
            />
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default FirstAidKitApp;
