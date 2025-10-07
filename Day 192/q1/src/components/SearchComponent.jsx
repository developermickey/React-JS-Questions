import { useState } from "react";

const dataList = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(dataList);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    const result = dataList.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(result);
  };
  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchComponent;
