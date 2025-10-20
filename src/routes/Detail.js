import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../Detail.module.css';

function Detail() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const getMovie = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            setLoading(false);
        };
        getMovie();
    }, [id]);
    return (
    <div className={styles.detailPage}>
        <div className={styles.detailContainer}>
            <Link to="/" className={styles.backButton}>
                Back
            </Link>
            
            {loading ? (
                <div className={styles.loadingContainer}>
                    <div className={styles.loadingText}>Loading...</div>
                    <div className={styles.loadingSpinner}></div>
                </div>
            ) : (
                <div className={styles.detailHero}>
                    <div className={styles.detailContent}>
                        <div className={styles.detailPoster}>
                            <img 
                                src={movie.large_cover_image || movie.medium_cover_image} 
                                alt={movie.title}
                                className={styles.detailPosterImage}
                            />
                        </div>
                        <div className={styles.detailInfo}>
                            <h1 className={styles.detailTitle}>{movie.title}</h1>
                            
                            <div className={styles.detailMeta}>
                                <span className={styles.detailYear}>{movie.year}</span>
                                <div className={styles.detailRating}>
                                    <span className={styles.star}>★</span>
                                    <span>{movie.rating}/10</span>
                                </div>
                                <span className={styles.detailRuntime}>{movie.runtime} min</span>
                            </div>
                            
                            <div className={styles.detailGenres}>
                                {movie.genres.map((genre) => (
                                    <span key={genre} className={styles.detailGenre}>
                                        {genre}
                                    </span>
                                ))}
                            </div>
                            
                            <p className={styles.detailDescription}>
                                {movie.description_full || movie.summary}
                            </p>
                            
                            <div className={styles.detailActions}>
                                <button className={styles.detailButton}>
                                    ▶ Play
                                </button>
                                <button className={`${styles.detailButton} ${styles.secondary}`}>
                                    + My List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>);
}

export default Detail;