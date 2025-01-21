import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./pages/Status.module.css";
import styles1 from "./AnimeList.module.css";

const AnimeListFromStorage = ({ storageKey }) => {
  const [animeList, setAnimeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAnime = JSON.parse(localStorage.getItem(storageKey)) || [];
    setAnimeList(savedAnime);
  }, [storageKey]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = animeList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(animeList.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDelete = (animeId) => {
    const updatedList = animeList.filter((anime) => anime.mal_id !== animeId);
    setAnimeList(updatedList);
    localStorage.setItem(storageKey, JSON.stringify(updatedList));
    alert("Anime removed from the list.");
  };

  return (
 <div className={styles.anime_list}>
  {currentItems.length > 0 ? (
        currentItems.map((anime) => (
          <div key={anime.mal_id} className={styles1.anime_card}>
            <img
              src={anime.images.webp.image_url}
              alt={anime.title}
              onClick={() => navigate(`/anime/${anime.mal_id}`)}
            />
            <h3 className={styles1.anime_card_title}>{anime.title_english}</h3>
            <button
              onClick={() => handleDelete(anime.mal_id)}
              className={styles.delete_button}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No anime found in {storageKey}.</p>
      )}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimeListFromStorage;
