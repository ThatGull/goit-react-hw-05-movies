import React, {useState, useEffect} from 'react';
import {movieAPI} from '../components/servises/movieAPI';
import MovieList from 'components/MovieList/MovieList';
import ReactPaginate from 'react-paginate';


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0);


    useEffect(()=> {
      const fetchMovies = async ()=> {
        try {
          const trendingMovies = await movieAPI(page);

          setMovies(trendingMovies.results);
          setPageCount(trendingMovies.total_pages);
              
          
        } catch (error) {
          console.error(error);
        }
      }
      fetchMovies(page)
    }, [page])
     
   

const handlePageClick = (event) => {
  const page = event.selected + 1;
  setPage(page);   
    };
     

  return (
    <>
    <main>
    <MovieList movies={movies}/>
    </main>
    <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </>
  )
}



export default Home;