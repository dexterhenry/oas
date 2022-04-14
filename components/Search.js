import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

export const Search = ({ handleSearchByName, currentCategory }) => {
  const [search, setSearch] = useState("");
  const handleInputSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!search) {
      handleSearchByName(search);
    }
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [currentCategory]);

  const handleKeyDown = (e) => {
    let keycode = e.keyCode || e.which;
    keycode == 13 && search && handleSearchByName(search);
  };

  return (
    <div className={styles.search_input_wrapper}>
      <input
        name="search-api"
        placeholder="Find api ..."
        autoComplete="off"
        value={search}
        onInput={handleInputSearch}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
