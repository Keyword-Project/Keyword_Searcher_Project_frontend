import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

interface MenuItemUnderlineProps {
  active?: boolean;
}

interface MenuItemProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const StyledLink = styled(Link)<{ color: boolean }>`
  color: ${({ color }) => (color ? "black" : "var(--Gray500)")};
  text-decoration: none;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    color: black;
  }
`;

const AppContainer = styled.div`
  display: flex;
  margin-left: 15%;
  align-items: flex-end;
`;

const MenuItemContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  position: relative;
`;
const Title = styled(Link)`
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
  const [activeMenu, setActiveMenu] = useState("");
  const { pathname } = useLocation();

  const link = [
    { to: "categories", name: "카테고리 검색", key: 0 },
    { to: "keyword", name: "키워드 검색", key: 0 },
  ];
  const handleMenuClick = (name: string) => {
    setActiveMenu(name);
  };

  return (
    <AppContainer>
      <Title to='/'>Digging</Title>
      {link.map((item) => {
        const isActiveColor = pathname === `/${item.to}`;
        return (
          <MenuItem
            key={item.key}
            active={activeMenu === item.to}
            onClick={() => {
              handleMenuClick(item.to);
            }}
          >
            <StyledLink to={`/${item.to}`} color={isActiveColor}>
              {item.name}
            </StyledLink>
          </MenuItem>
        );
      })}
    </AppContainer>
  );
}

const MenuItem = ({ active, onClick, children }: MenuItemProps) => {
  return (
    <MenuItemContainer onClick={onClick}>
      {children}
      <MenuItemUnderline active={active} />
    </MenuItemContainer>
  );
};
