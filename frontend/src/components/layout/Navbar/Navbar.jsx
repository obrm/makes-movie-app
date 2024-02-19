
import  { useState, useEffect } from 'react';
import { NavbarContainer, LeftSide, RightSide } from './Navbar.styles';

import HamburgerIconComponnent from './HamburgerIconComponnent';
import GoogleButtonComponnent from './GoogleButtonComponnent';
import MenuBoxComponnent from './MenuBoxComponnent';
import ToggleButtonComponnent from './ToggleButtonComponnent';
import SearchInputComponnent from './SearchInputComponnent';
import SearchButtonComponnent from './SearchButtonComponnent';
import SettingIconComponnent from './SettingIconComponnent';

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isToggled, setIsToggled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSearch = () => {};

  return (
    <NavbarContainer isToggled={isToggled}>
      <LeftSide>
        <HamburgerIconComponnent
          onClick={handleMenuToggle}
          isOpen={isMenuOpen}
          isToggled={isToggled}
        />
        {isMenuOpen && (
          <MenuBoxComponnent isToggled={isToggled} onClick={handleToggle} />
        )}
      </LeftSide>
      <RightSide>
        <GoogleButtonComponnent />
        {!isMobileView && <SettingIconComponnent isToggled={isToggled} />}
        {!isMobileView && (
          <ToggleButtonComponnent
            onClick={handleToggle}
            isToggled={isToggled}
          />
        )}
        {!isMobileView && <SearchInputComponnent isToggled={isToggled} />}
        {!isMobileView && (
          <SearchButtonComponnent
            onClick={handleSearch}
            isToggled={isToggled}
          />
        )}
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;

