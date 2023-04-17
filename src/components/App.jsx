import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const NotFound = lazy(() => import("pages/NotFound"));
const MovieCard = lazy(() => import("../components/MovieCard/MovieCard"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// const TrendingMoviesList = lazy(() => import("./TrendingMoviesList/TrendingMoviesList"));



export const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>   
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        </Route>
         <Route path="*" element={<NotFound />}/>
      </Routes>
      
    </div>
  );
};
