import { useParams, Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import Moment from "react-moment";
import {Rating} from '../components/Rating';
export const Details = () => {

  //retrieve the id movie from the url
  const { movieId } = useParams();
  

  

    const [query, setQuery] = useState('');

    //Request to the movie API to
    useEffect(() => {
        const FetchMovie = async () => {
            try {
                const result = await axios.get(
                    `https://api.themoviedb.org/3/movie/`+movieId+`?api_key=${process.env.REACT_APP_API_KEY}&language=it-IT`
                    );
                console.log(result.data);
                setQuery(result.data);
            }
            catch (error) {
                console.warn(error);
            }
        };
        FetchMovie();
    }, [movieId]);





  
  return (
    <>
      <Link to="/add">
            <button className="btn" style={{margin:15}}>Back</button>
      </Link>
      {/*Show the title, img and overview if available */}
        {query && (
            <div className="result-card" style={{textAlign: 'center',margin:'5% 40%',fontSize:'25px'}}>
                <div className="poster-wrapper">
                    {query.poster_path ? (
                        <img
                        style={{width:'150px',height:'200px'}}
                            src={`https://image.tmdb.org/t/p/w200${query.poster_path}`}
                            alt={`${query.title} Poster`}
                        />
                    ) : (
                        <div className="filler-poster" />
                    )}
                </div>
                <div className="info">
                    <div className="header">
                        <h3 className="title" style={{fontSize:'28px'}}>{query.title}</h3>
                        <h4 className="release-date">
                            <Moment format="YYYY">{query.release_date}</Moment>
                        </h4>
                        <Rating
                            rating={query.vote_average}
                            rating_number={query.vote_count}
                        />
                    </div>
                    <p>{query.overview}</p>
                </div>
        </div>
        )}
    </>
  );
};
