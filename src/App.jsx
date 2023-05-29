import React from "react";
import useFetch from "./hooks/useFetch";
import useFilter from "./hooks/useFilter";
import { useState } from "react";
import Todo from "./components/Todo";
import FilterBar from "./components/FilterBar";
function App() {
  const {
    data: todos,
    error,
    loading,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [property, setProperty] = useState("title");
  const [query, setQuery] = useState("");
  const filteredData = useFilter(todos, query, property);
  const propertyHandler = () => {
    if (property === "completed") {
      setProperty("title");
    } else {
      setProperty("completed");
    }
  };
  return (
    <div>
      <div className='max-w-3xl m-auto py-3'>
        <FilterBar
          query={query}
          setQuery={setQuery}
          onFilter={propertyHandler}
          property={property}
        />
        <p className='text-xl font-semibold py-2'>Tasks</p>
        {loading && "Loading..."}
        {error && error}
        {filteredData &&
          filteredData?.map((item, i) => {
            return <Todo key={i} title={item.title} isDone={item.completed} />;
          })}
        {filteredData?.length === 0 && <p>No results</p>}
      </div>
    </div>
  );
}

export default App;
