import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Detail() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(id);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [id]);
    return (
    <div>{loading ? 
        (<h1>Loading...</h1>) : 
        (<h1>{movie.title}</h1>)}
    </div>);
}

export default Detail;