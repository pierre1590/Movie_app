import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import axios from "axios";


export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = async(e) => {
    e.preventDefault();
    setQuery(e.target.value);

    
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=` + e.target.value);
      setResults(res.data.results);
      setQuery("");
    } catch (err) {
      console.warn(err);
      setResults([]);
    }

   
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results?.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
