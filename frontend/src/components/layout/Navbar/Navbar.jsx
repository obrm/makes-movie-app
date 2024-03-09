import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { NavbarContainer, LeftSide, RightSide, SearchResultsBox,   SearchInputWrapper,SearchResultItem,  StarIcon ,  SearchResultImage,SearchResultText,SearchResultTitle, SearchResultSubText,SearchResultRating,} from './Navbar.styles';

import HamburgerIconComponent from './HamburgerIconComponent';
import GoogleButtonComponent from './GoogleButtonComponent';
import MenuBoxComponent from './MenuBoxComponent';
import ToggleButtonComponent from './ToggleButtonComponent';
import SearchInputComponent from './SearchInputComponent';
import SearchButtonComponent from './SearchButtonComponent';
import SettingIconComponent from './SettingIconComponent';
import { useDebouncedSearch } from '../../../hooks/useDebouncedSearch';
import { Link } from 'react-router-dom';

const Navbar = ({ isToggled, setIsToggled }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null); // Initialize searchResults state
  const navigate = useNavigate();

  // Use the custom hook for debounced search
  const { query, setQuery } = useDebouncedSearch('', setSearchResults);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleToggle = () => setIsToggled(!isToggled);
  const handleSearch = () => navigate(`/search?q=${query}`);

  return (
    <>
      <NavbarContainer isToggled={isToggled}>
        <LeftSide>
          <HamburgerIconComponent onClick={handleMenuToggle} isOpen={isMenuOpen} isToggled={isToggled} />
          <MenuBoxComponent isToggled={isToggled} onClick={handleToggle} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </LeftSide>
        <RightSide>
          <GoogleButtonComponent />
          {!isMobileView && <SettingIconComponent isToggled={isToggled} />}
          {!isMobileView && <ToggleButtonComponent onClick={handleToggle} isToggled={isToggled} />}
          {!isMobileView && (
            <SearchInputWrapper>
              <SearchInputComponent
                isToggled={isToggled}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <SearchButtonComponent handleSearch={handleSearch} isToggled={isToggled} />
            </SearchInputWrapper>
          )}
        </RightSide>
      </NavbarContainer>
      {!isMobileView && searchResults && (
        <SearchResultsBox>
      {searchResults.actorsAndDirectors && searchResults.actorsAndDirectors.map((person) => (
  <SearchResultItem key={person.id}>

    <Link to={`/movies/actors/${encodeURIComponent(person.name)}/page/1`}>

      <SearchResultImage src={person.profileImg} alt={person.name} />
      <SearchResultText>
        <SearchResultTitle>{person.name}</SearchResultTitle>
        <SearchResultSubText>{person.knownFor}</SearchResultSubText>
      </SearchResultText>
    </Link>
  </SearchResultItem>
))}

         
{searchResults.movies && searchResults.movies.map((movie) => (
  <SearchResultItem key={movie.id}>

    <Link to={`/movies/${movie.id}`}>

      <SearchResultImage src={movie.posterImg} alt={movie.title} />
      <SearchResultText>
        <SearchResultTitle>{movie.title}</SearchResultTitle>
        <SearchResultSubText>({movie.releaseYear})</SearchResultSubText>
        <SearchResultRating>
          <StarIcon />
          {movie.rating}
        </SearchResultRating>
      </SearchResultText>
    </Link>
  </SearchResultItem>
))}
        </SearchResultsBox>
      )}
    </>
  );
};

export default Navbar;