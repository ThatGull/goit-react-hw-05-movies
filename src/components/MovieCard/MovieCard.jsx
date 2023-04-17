import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getMovieByID } from '../servises/movieAPI';
import {
  StyledButton,
  StyledContainer,
  StyledAdditional,
  StyledLink,
} from './MovieCard.styled';
import img from '../../images/no-image-placeholder.png';

const MovieCard = () => {
  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState([]);
  const [poster, setPoster] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    const fetchMovie = async id => {
      const result = await getMovieByID(id);

      setMovie(result);
      setGenre(result.genres);
      setPoster(`https://image.tmdb.org/t/p/w300/${result.poster_path}`);
    };
    fetchMovie(id);
  }, [id]);

  const genreList = genre => {
    if (!genre) {
      return;
    }
    const list = genre.map(genre => genre.name);
    return list.join(' ');
  };
  return (
    <>
      <Link to={backLink}>
        <StyledButton type="button">Go back</StyledButton>
      </Link>
      <StyledContainer>
        <div>
          {movie.poster_path !== null ? (
            <img src={poster} alt=""></img>
          ) : (
            <img src={img} alt=""></img>
          )}
        </div>
        <div>
          <h1>
            {movie.original_title} ({parseFloat(movie.release_date)})
          </h1>
          <p>User score: {(movie.vote_average * 10).toFixed()}&#37;</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{genreList(genre)}</p>
        </div>
      </StyledContainer>
      <StyledAdditional>
        <h2>Additional information</h2>
        <ul>
          <li className="additional">
            <StyledLink to="cast" state={{ from: location?.state?.from }}>
              Cast
            </StyledLink>
          </li>
          <li className="additional">
            <StyledLink to="reviews" state={{ from: location?.state?.from }}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </StyledAdditional>
      <Outlet />
    </>
  );
};

export default MovieCard;
