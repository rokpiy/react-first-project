import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../Movie.module.css';

function Movie({id, medium_cover_image, title, summary, genres}){
    return (
    <div className={styles.movieCard}>
        <div className={styles.movieImageContainer}>
            <img 
                src={medium_cover_image} 
                alt={title} 
                className={styles.movieImage}
            />
            <div className={styles.movieOverlay}></div>
        </div>
        <div className={styles.movieContent}>
            <h2 className={styles.movieTitle}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p className={styles.movieSummary}>{summary}</p>
            <div className={styles.movieGenres}>
                {genres.map((genre) => (
                    <span key={genre} className={styles.genreTag}>{genre}</span>
                ))}
            </div>
            <div className={styles.movieActions}>
                <Link to={`/movie/${id}`} className={styles.movieLink}>
                    View Details
                </Link>
                <div className={styles.movieRating}>
                    <span className={styles.star}>★</span>
                    <span>9.0</span>
                </div>
            </div>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;