import React, { useState } from "react";
import styles from "./AnimeList.module.css"
import {Search} from "lucide-react";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles.to_flex}>
      <input
      className = {styles.searchBar}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for anime..."
      />
      <button className={styles.searchBtn} onClick={handleSearch}><Search/></button>
    </div>
  );
};

export default SearchBar;
