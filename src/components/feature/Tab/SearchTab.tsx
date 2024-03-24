import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Header = styled.header`
  display: flex;
  color: #090707;
  height: 60px;
  background-color: white;
`;

const LogoBox = styled.div`
  width: 100px;
  height: 100%;
  border-collapse: collapse;
`;

const CustomTabDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 50px;
`;

const CustomTabs = styled(Tabs)`
  .nav-item {
    font-size: 1rem;
    color: black;
   
  }

  .nav-link {
    font-size: 13px;
    height: 100%;
    padding: 5px;
    border-radius: 0px;
    &:hover {
      background-color: #efedff;
      border: none;
    }
  }

  .nav-link.active {
    background-color: #efedff;
    font-size: 13px;
    height: 100%;
    border-radius: 0px;
    padding: 5px;
    border-bottom: 3px solid black;
  }
`;


const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: bold;
`;

export default function SearchTab() {
  return (
    <>
      <Header>
        <LogoBox>
          {/* <LogoImg alt="왜 안나오지" src="searchIcon.png" />
          키워드 페이지 */}
        </LogoBox>

        <CustomTabDiv>
          <CustomTabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            fill
          >
            <Tab
              eventKey="home"
              title={<StyledLink to="/category">카테고리 검색</StyledLink>}
            ></Tab>
            <Tab
              eventKey="profile"
              title={<StyledLink to="/keyword">키워드 검색</StyledLink>}
            ></Tab>
          </CustomTabs>
        </CustomTabDiv>
        <Outlet />
      </Header>
    </>
  );
}
