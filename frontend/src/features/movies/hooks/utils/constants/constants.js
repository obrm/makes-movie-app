export const CONSTANTS = {
  HIGHEST_MOVIES_URL: `${import.meta.env.VITE_BACKEND_URL}movies/highest-rated/page/`,
  LATEST_MOVIES_URL: `${import.meta.env.VITE_BACKEND_URL}movies/latest/page/`,
  CAROUSEL_URL: `${import.meta.env.VITE_BACKEND_URL}movies/home-carousel`,
  HOME_CAROUSEL_QUERY_KEY: 'home-carousel',
  LATEST_MOVIES_QUERY_KEY: 'latest-movies',
  HIGHEST_RATED_MOVIES_QUERY_KEY: 'highest-rated-movies',
  SEARCH_MOVIES_URL: `${import.meta.env.VITE_BACKEND_URL}movies/search`, // Added search endpoint
};
