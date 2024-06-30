import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MenuItemUnderlineProps, MenuItemProps } from "type/searchMethodTab";
import media from "styles/media";

const StyledLink = styled(Link)<{ color: boolean }>`
  color: ${({ color }) => (color ? "black" : "var(--Gray500)")};
  text-decoration: none;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    color: black;
  }
  ${media.mobile`
  font-size: var(--font-size-small);
  `}
`;

const TabContainer = styled.div`
  display: flex;
  margin-left: 15%;
  align-items: flex-end;
`;

const MenuItemContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  position: relative;
`;
const Title = styled.p`
  color: var(--Orange500);
  text-decoration-line : none;
  text-shadow: 2px 4px 6px rgba(37, 36, 62, 0.15);
  font-size: var(--font-size-medium);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  font-family: PaytoneOne;
  margin-right: 1rem;
  margin-bottom: 0.7rem;
${media.mobile`
  font-size: var(--font-size-small);
  `}
`;

const MenuItemUnderline = styled.div<MenuItemUnderlineProps>`
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color: ${({ active }) => (active ? "black" : "transparent")};
  transform: scaleX(${({ active }) => (active ? "1" : "0")});
  transition: transform 0.3s ease;
  position: absolute;
  bottom: 0;
  left: 0;
`;


export default function SearchMethodTab() {
  const { pathname } = useLocation();

  const link = [
    { to: "categories", name: "카테고리 검색", key: 0 },
    { to: "keyword", name: "키워드 검색", key: 1 },
  ];


  return (
    <TabContainer>
      <Title>Diggggle</Title>
      {link.map((item) => {
        let isActive = false
        if(pathname === item.to){
          isActive = true;
        } else if (pathname.split('/')[1] === item.to) {
          isActive = true;
        }
    
        return (
          <MenuItem
            key={item.key}
            active={isActive}
          >
            <StyledLink to={`/${item.to}`} color={isActive}>
              {item.name}
            </StyledLink>
          </MenuItem>
        );
      })}
    </TabContainer>
  );
}

const MenuItem = ({ active, children }: MenuItemProps) => {
  return (
    <MenuItemContainer >
      {children}
      <MenuItemUnderline active={active} />
    </MenuItemContainer>
  );
};
