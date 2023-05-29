import { useState, useEffect } from "react";

const useFilter = (data, query, property) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let results = [];
    if (property === "title") {
      results = data?.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    } else if (property === "completed") {
      results = data?.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) &&
          item.completed === false
      );
    }
    setFilteredData(results);
  }, [data, query, property]);

  return filteredData;
};

export default useFilter;
