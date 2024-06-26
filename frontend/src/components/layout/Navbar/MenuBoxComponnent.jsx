import { MenuBox } from './Navbar.styles';
import SettingIconComponnent from './SettingIconComponnent';
import ToggleButtonComponnent from './ToggleButtonComponnent';
import { FlexContainerAbove } from './Navbar.styles';
import { MobileFlex } from './Navbar.styles';
import { MobileList } from './Navbar.styles';
import LinksList from './LinksList';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Movies',
    path: '/movies/latest/page/1',
  },
  {
    name: 'Advanced Search',
    path: '/advanced-search',
  },
];

const MenuBoxComponnent = ({
  isToggled,
  onToggle,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const isMobileView = window.innerWidth <= 768;

  return (
    <>
      {isMobileView ? (
        <>
          <MenuBox isToggled={isToggled} isMenuOpen={isMenuOpen}>
            <MobileFlex>
              <FlexContainerAbove>
                <ToggleButtonComponnent
                  isToggled={isToggled}
                  onClick={onToggle}
                />
                <SettingIconComponnent isToggled={isToggled} />
              </FlexContainerAbove>
              {/* <FlexContainerBelow>
                <SearchInputComponnent isToggled={isToggled} />
                <SearchButtonComponnent isToggled={isToggled} />
              </FlexContainerBelow> */}
            </MobileFlex>
            <MobileList>
              <LinksList links={links} setIsMenuOpen={setIsMenuOpen} />
            </MobileList>
          </MenuBox>
        </>
      ) : (
        <MenuBox isToggled={isToggled} isMenuOpen={isMenuOpen}>
          <LinksList links={links} setIsMenuOpen={setIsMenuOpen} />
        </MenuBox>
      )}
    </>
  );
};
export default MenuBoxComponnent;
