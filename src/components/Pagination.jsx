import React from "react";
import styles from "./AnimeList.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className={styles.pagination_container}>
      <button
        className={styles.paginationBtn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft/>
      </button>
      <span className={styles.pagination_title}>Page {currentPage}</span>
      <button 
       className={styles.paginationBtn}
      onClick={() => onPageChange(currentPage + 1)}><ChevronRight/></button>
    </div>
  );
};

export default Pagination;
