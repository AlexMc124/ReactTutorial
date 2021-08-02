import React from "react";
import "./App.css";
import SearchBar from "./searchbar";
import AddItem from "./AddItem";
import { useState } from "react";
import ItemsDisplay from "./ItemsDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParamas={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
