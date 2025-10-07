import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === "") {
        setFilteredData(dataList); // Reset when input is cleared
      } else {
        // Use implicit return with parentheses for safety
        const result = dataList.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(result);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
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
