import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

export const Search = ({ handleSearchByName, currentCategory }) => {
  const [search, setSearch] = useState("");
  const handleInputSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      handleSearchByName(search);
    }

    if (currentCategory !== "all" && !search) return;
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [currentCategory]);

  return (
    <div className={styles.search}>
      <input
        name="search-api"
        placeholder="Find api ..."
        autoComplete="off"
        value={search}
        onInput={handleInputSearch}
      />
    </div>
  );
};
