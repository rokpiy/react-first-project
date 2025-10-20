import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from '../Home.module.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);
    console.log(movies);
    return (
      <div className={styles.home}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Joshua's Movie App</h1>
            <p className={styles.heroSubtitle}>Find your favorite movies</p>
          </div>
        </div>
        
        {loading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingText}>Loading...</div>
            <div className={styles.loadingSpinner}></div>
          </div>
        ) : (
          <div className={styles.moviesSection} id="movies">
            <h2 className={styles.sectionTitle}>Popular Movies</h2>
            <div className={styles.moviesGrid}>
              {movies.map((movie) => (
                <Movie 
                  key={movie.id}
                  id={movie.id}
                  medium_cover_image={movie.medium_cover_image} 
                  title={movie.title} 
                  summary={movie.summary} 
                  genres={movie.genres} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

export default Home;