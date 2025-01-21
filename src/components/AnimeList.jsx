import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import styles from "./AnimeList.module.css"
const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const fetchAnime = async (page = 1, query = "") => {
    const endpoint = query
      ? `https://api.jikan.moe/v4/anime?q=${query}&page=${page}`
      : `https://api.jikan.moe/v4/anime?page=${page}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    setAnimeList(data.data || []);
    console.log(data.data);
  };

  useEffect(() => {
    fetchAnime(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className={styles.body_container}>
      <div className={styles.searchBox_container}>
      <SearchBar className={styles.searchBar} onSearch={handleSearch} />
      </div>
      <div className={styles.total_container}>
      <div className={styles.anime_list_container}>
        {animeList.map((anime) => (
          <div className={styles.anime_card}
            key={anime.mal_id}
            onClick={() => navigate(`/anime/${anime.mal_id}`)}
            // className="anime-item"
          >
            <img className={styles.anime_card_image} src={anime.images.webp.image_url} alt={anime.title} />
            <h3 className={styles.anime_card_title}>{anime.title}</h3>
          </div>
        ))}
      </div>
      </div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default AnimeList;
