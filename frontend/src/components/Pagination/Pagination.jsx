
import { useState, useEffect } from 'react'; // Import useEffect
import { useQuery } from 'react-query';
import {
  PaginationWrapper,
  PaginationButton,
  NumberButton,
  NumberContainer,
} from './Pagination.style';
import MovieCard from '../MovieCard/MovieCard';

const Pagination = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Update currentPage when onPageChange changes
    setCurrentPage(1);
  }, [onPageChange]);

  const fetchMovies = async (key, page = currentPage) => {
    // Use currentPage instead of 22
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=033a7d652a60b8f9fe88c99d78506501&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    const data = await response.json();
    setMovies(data.results); // Store fetched movies
    return data;
  };

  const { data, isLoading, isError } = useQuery(
    ['movies', currentPage],
    fetchMovies
  );
  // console.log(data.total_pages);

  const totalPages = data ? 500 : 1;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleFirstPage = () => {
    if (!isFirstPage) {
      setCurrentPage(1);
      onPageChange(1);
    }
  };

  const handlePrevPage = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (!isLastPage) {
      setCurrentPage(500);
      onPageChange(500);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <PaginationWrapper>
        <PaginationButton onClick={handlePrevPage} disabled={isFirstPage}>
          Prev
        </PaginationButton>
        <PaginationButton onClick={handleFirstPage} disabled={isFirstPage}>
          First
        </PaginationButton>
        <NumberContainer>
          {Array.from({ length: 9 }, (_, i) => (
            <NumberButton key={i + 1} onClick={() => onPageChange(i + 1)}>
              {i + 1}
            </NumberButton>
          ))}
        </NumberContainer>
        <PaginationButton onClick={handleLastPage} disabled={isLastPage}>
          Last
        </PaginationButton>
        <PaginationButton onClick={handleNextPage} disabled={isLastPage}>
          Next
        </PaginationButton>
      </PaginationWrapper>
      <div>
        {/* Render movie cards */}
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;







// import { useState, useEffect } from 'react'; // Import useEffect
// import { useQuery } from 'react-query';
// import {
//   PaginationWrapper,
//   PaginationButton,
//   NumberButton,
//   NumberContainer,
// } from './Pagination.style';
// import MovieCard from '../MovieCard/MovieCard';

// const Pagination = ({ onPageChange }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Update currentPage when onPageChange changes
//     setCurrentPage(1);
//   }, [onPageChange]);

//   const fetchMovies = async (key, page = currentPage) => {
//     // Use currentPage instead of 22
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=033a7d652a60b8f9fe88c99d78506501&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
//     );
//     const data = await response.json();
//     setMovies(data.results); // Store fetched movies
//     return data;
//   };

//   const { data, isLoading, isError } = useQuery(
//     ['movies', currentPage],
//     fetchMovies
//   );
//   // console.log(data.total_pages);

//   const totalPages = data ? 500 : 1;

//   const isFirstPage = currentPage === 1;
//   const isLastPage = currentPage === totalPages;

//   const handleFirstPage = () => {
//     if (!isFirstPage) {
//       setCurrentPage(1);
//       onPageChange(1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (!isFirstPage) {
//       setCurrentPage(currentPage - 1);
//       onPageChange(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (!isLastPage) {
//       setCurrentPage(currentPage + 1);
//       onPageChange(currentPage + 1);
//     }
//   };

//   const handleLastPage = () => {
//     if (!isLastPage) {
//       setCurrentPage(500);
//       onPageChange(500);
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching data</div>;

//   return (
//     <div>
//       <PaginationWrapper>
//         <PaginationButton onClick={handlePrevPage} disabled={isFirstPage}>
//           Prev
//         </PaginationButton>
//         <PaginationButton onClick={handleFirstPage} disabled={isFirstPage}>
//           First
//         </PaginationButton>
//         <NumberContainer>
//           {Array.from({ length: 9 }, (_, i) => (
//             <NumberButton key={i + 1} onClick={() => onPageChange(i + 1)}>
//               {i + 1}
//             </NumberButton>
//           ))}
//         </NumberContainer>
//         <PaginationButton onClick={handleLastPage} disabled={isLastPage}>
//           Last
//         </PaginationButton>
//         <PaginationButton onClick={handleNextPage} disabled={isLastPage}>
//           Next
//         </PaginationButton>
//       </PaginationWrapper>
//       <div>
//         {/* Render movie cards */}
//         {movies.map((movie, index) => (
//           <MovieCard key={index} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pagination;




