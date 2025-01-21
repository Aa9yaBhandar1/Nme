import React from "react";
import AnimeListFromStorage from "../AnimeListFromStorage";
import styles from "./Status.module.css";

const Watched = () => {
  return(
  <div className={styles.watched_wishlist_container}>
  <AnimeListFromStorage storageKey="watched" />
  </div>
  );
};

export default Watched;
