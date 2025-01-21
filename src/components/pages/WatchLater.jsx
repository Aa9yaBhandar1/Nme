import React from "react";
import AnimeListFromStorage from "../AnimeListFromStorage";
import styles from "./Status.module.css";

const WatchLater = () => {
  return (
  <div className={styles.watched_wishlist_container}>
  <AnimeListFromStorage storageKey="watchLater" />
  </div>

  );
};

export default WatchLater;
