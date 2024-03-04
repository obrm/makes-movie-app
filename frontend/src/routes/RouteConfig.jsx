import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import MoviePage from '../pages/moviePage/MoviePage';

import { SharedLayout } from '../components';
import { Error } from '../pages';

const Movie = () => {
  return <div>Movie</div>;
};

const Movies = () => {
  return <div>Movies</div>;
};

const TvShows = () => {
  return <div>Tv Shows</div>;
};

const MovieListSearch = () => {
  return <div>Movie List Search</div>;
};

const PopularActors = () => {
  return <div>Popular Actors</div>;
};

const ActorMovies = () => {
  return <div>Actor Movies</div>;
};

const AIGeneratedMovies = () => {
  return <div>AI Generated Movies</div>;
};

const AIGeneratedMoviesByCategory = () => {
  return <div>AI Generated Movies By Category</div>;
};

const Watch = () => {
  return <div>Watch</div>;
};

const SavedMovies = () => {
  return <div>Saved Movies</div>;
};

const Settings = () => {
  return <div>Settings</div>;
};

const AdvancedSearch = () => {
  return <div>Advanced Search</div>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'movies',
        children: [
          {
            path: ':id',
            element: <MoviePage />,
          },
          {
            path: ':category/page/:page',
            element: <Movies />,
          },
          {
            path: 'actors/:name/page/:page',
            element: <ActorMovies />,
          },
        ],
      },
      {
        path: 'tv/:category/page/:page',
        element: <TvShows />,
      },
      {
        path: 'search/:type/:query/page/:page',
        element: <MovieListSearch />,
      },
      {
        path: 'popular-actors/page/:page',
        element: <PopularActors />,
      },
      {
        path: 'ai-generated-movies',
        element: <AIGeneratedMovies />,
      },
      {
        path: 'ai-generated-movies/:categoryName',
        element: <AIGeneratedMoviesByCategory />,
      },
      {
        path: 'watch/:id',
        element: <Watch />,
      },
      {
        path: 'savedmovies',
        element: <SavedMovies />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'advanced-search',
        element: <AdvancedSearch />,
      },
    ],
  },
]);

export default router;
// import { createBrowserRouter } from 'react-router-dom';
// import { SharedLayout } from '../components';
// import { Error } from '../pages';
// import MoviePage from '../pages/moviePage/MoviePage';
// //mock components

// const Home = () => {
//   return <div>Home</div>;
//   //return <MoviePage />;
// };

// const Movie = () => {
//   return <div>Movie</div>;
// };

// const Movies = () => {
//   return <div>Movies</div>;
// };

// const TvShows = () => {
//   return <div>Tv Shows</div>;
// };

// const MovieListSearch = () => {
//   return <div>Movie List Search</div>;
// };

// const PopularActors = () => {
//   return <div>Popular Actors</div>;
// };

// const ActorMovies = () => {
//   return <div>Actor Movies</div>;
// };

// const AIGeneratedMovies = () => {
//   return <div>AI Generated Movies</div>;
// };

// const AIGeneratedMoviesByCategory = () => {
//   return <div>AI Generated Movies By Category</div>;
// };

// const Watch = () => {
//   return <div>Watch</div>;
// };

// const SavedMovies = () => {
//   return <div>Saved Movies</div>;
// };

// const Settings = () => {
//   return <div>Settings</div>;
// };

// const AdvancedSearch = () => {
//   return <div>Advanced Search</div>;
// };

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <SharedLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: 'movie/:id',
//         element: <MoviePage />,
//       },
//       {
//         path: 'movies',
//         children: [
//           {
//             path: ':category/page/:page',
//             element: <MoviePage />,
//           },
//           {
//             path: 'actors/:name/page/:page',
//             element: <ActorMovies />,
//           },
//         ],
//       },
//       {
//         path: 'tv/:category/page/:page',
//         element: <TvShows />,
//       },
//       {
//         path: 'search/:type/:query/page/:page',
//         element: <MovieListSearch />,
//       },
//       {
//         path: 'popular-actors/page/:page',
//         element: <PopularActors />,
//       },
//       {
//         path: 'ai-generated-movies',
//         element: <AIGeneratedMovies />,
//       },
//       {
//         path: 'ai-generated-movies/:categoryName',
//         element: <AIGeneratedMoviesByCategory />,
//       },
//       {
//         path: 'watch/:id',
//         element: <Watch />,
//       },
//       {
//         path: 'savedmovies',
//         element: <SavedMovies />,
//       },
//       {
//         path: 'settings',
//         element: <Settings />,
//       },
//       {
//         path: 'advanced-search',
//         element: <AdvancedSearch />,
//       },
//     ],
//   },
// ]);

// export default router;
