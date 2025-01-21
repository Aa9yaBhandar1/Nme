import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./AnimeDetail.module.css";
import styles1 from "./pages/Status.module.css";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await response.json();
      setAnime(data);
    };
    fetchAnimeDetail();
  }, [id]);

  const saveToLocalStorage = (key, anime) => {
    const existingEntries = JSON.parse(localStorage.getItem(key)) || [];
    if (!existingEntries.some((entry) => entry.mal_id === anime.mal_id)) {
      existingEntries.push(anime);
      localStorage.setItem(key, JSON.stringify(existingEntries));
      alert(`${anime.title} added to ${key}`);
    } else {
      alert(`${anime.title} is already in ${key}`);
    }
  };

  if (!anime) return <div>Loading...</div>;

  return (
    <div className={styles.anime_detail_total_container}>

     <h1 className={styles.anime_detail_title}>{anime.data.title}</h1>

     <div className={styles.anime_detail_container}> 
      <div>
      <img className={styles.anime_detail_image} src={anime.data.images.webp.large_image_url} alt={anime.title} />

      <div className={styles.watch_buttons_container}>
        <button
          onClick={() => saveToLocalStorage("watched", anime.data)}
          className={styles1.watch_button}
        >
          Add to Watched
        </button>
        <button
          onClick={() => saveToLocalStorage("watchLater", anime.data)}
          className={styles1.watch_button}
        >
          Add to Watch Later
        </button>
      </div>

      </div>
     <div className={styles.anime_detail_box}>
      <p className={styles.anime_detail_description}>{anime.data.synopsis}</p> 
      <p>Status: {anime.data.status}</p>
      <p>Duration: {anime.data.duration}</p>
      <p>Rating: {anime.data.rating}</p>
      <p>Episodes: {anime.data.episodes}</p>
      </div>
    </div>
    </div>
  );
};

export default AnimeDetail;
