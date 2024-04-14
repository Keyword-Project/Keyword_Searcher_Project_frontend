import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: bold;
`;

const AppContainer = styled.div`
  display: flex;
  margin-left: 15%;
  align-items: flex-end;
  height : 48%;
`;

const MenuItemContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  position: relative;
`;

const MenuItemUnderline = styled.div`
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
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (name) => {
    setActiveMenu(name);
  };

  return (
    <AppContainer>
      <MenuItem
        name="home"
        active={activeMenu === "home"}
        onClick={() => handleMenuClick("home")}
      >
        <StyledLink to="/category">카테고리 검색</StyledLink>
      </MenuItem>
      <MenuItem
        name="about"
        active={activeMenu === "about"}
        onClick={() => handleMenuClick("about")}
      >
        <StyledLink to="/keyword">키워드 검색</StyledLink>
      </MenuItem>
    </AppContainer>
  );
}

const MenuItem = ({ name, active, onClick, children }) => {
  return (
    <MenuItemContainer onClick={onClick}>
      {children}
      <MenuItemUnderline active={active} />
    </MenuItemContainer>
  );
};
