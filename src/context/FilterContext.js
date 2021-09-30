import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

function FilterContextProvider({ children }) {
  const [activeElement, setActiveElement] = useState("all");
  const [filterBy, setFilterBy] = useState("all");

  function handleFilter(name) {
    setActiveElement(name);
    setFilterBy(name);
  }

  const value = {
    activeElement,
    filterBy,
    handleFilter,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;