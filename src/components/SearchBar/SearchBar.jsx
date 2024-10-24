import { useState } from "react";
import styles from "./SearchBar.module.css";

export function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const trimmedCity = city.trim();
    if (trimmedCity) {
      onSearch(trimmedCity);
      setCity("");
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Где смотрим погоду?"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={({ key }) => key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Поиск</button>
      </div>
    </div>
  );
}
