import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pathNameFetch } from "lib/FetchSlice";
import {
  FirstCategory,
  ThirdCategory,
  SecondCategory,
} from "type/categoryList";
import { fetchCategoryList } from "api/categoryApi/route";
import styled from "styled-components";

const DropdownBoxDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  width: 50%;
  height: 100%;
`;

const DropdownBox = styled.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  height: 80%;
  margin-top: 5px;
`;

const DropdownHover = styled(Dropdown)`
  width: 100px;
  color: black;
  background-color: #ecedee;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  border-collapse: collapse;
`;

const DropdownNoHover = styled(Dropdown.Toggle)`
  color: black;
  width: 100%;
  padding: 0px;
  background-color: white;
  height: 100%;
  font-size: 13px;
  border-radius: 3px;
  border-collapse: collapse;
`;

const DropdownMenu = styled(Dropdown.Menu)`
  color: #5845eb;
  font-size: 1em;
  width: 100%;
  border: 2px solid black;
  border-radius: 3px;
  padding: 0px;
  background-color: white;
  .dropdown-item {
    &:hover {
      background-color: #bfc6cc;
      border: none;
    }
  }
`;

export default function CategoryFilter() {
  const [firCateList, setFirCate List] = useState<FirstCategory[]>([]);

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const getCategoryList = async () => {
      const res = await fetchCategoryList();

      setFirCateList(res.body.firstCategories);
    };
    getCategoryList();
  }, []);

  const [secCateList, setSecCateList] = useState<SecondCategory[]>([]);
  const [thrCateList, setThrCateList] = useState<ThirdCategory[]>([]);

  const [isSecCateDisabled, setIsSecCateDisabled] = useState(true);
  const [isThrCateDisabled, setIsThrCateDisabled] = useState(true);

  const [firCateTitle, setFirCateTitle] = useState("1차분류");

  const [secCateTitle, setSecCateTitle] = useState("2차분류");

  const [thrCateTitle, setThrCateTitle] = useState("3차분류");

  const thrDropdownSelecthandle = (eventKey: SelectCallback) => {
    setThrCateTitle(eventKey);
    dispatch(pathNameFetch(pathname));
  };

  const secDropdownSelecthandle = (eventKey: SelectCallback) => {
    setSecCateTitle(eventKey);
    const List = secCateList.find((item) => item.name == eventKey);

    setIsThrCateDisabled(false);

    if (List) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setThrCateList((prev) => (prev = List.thirdCategories));
    }

    if (eventKey != secCateTitle) {
      setThrCateTitle("3차분류");
    }
    dispatch(pathNameFetch(pathname));
  };

  const firDropdownSelecthandle = (eventKey: SelectCallback) => {
    setFirCateTitle(eventKey);
    console.log("첫번째 분류 선택시 eventKey", eventKey);
    const List = firCateList.find((item) => item.name == eventKey);

    setIsSecCateDisabled(false);
    if (List) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setSecCateList((prev) => (prev = List.secondCategories));
    }

    if (eventKey != firCateTitle) {
      setSecCateTitle("2차분류");
      setThrCateTitle("3차분류");
      setIsThrCateDisabled(true);
    }
    dispatch(pathNameFetch(pathname));
  };

  return (
    <>
      <DropdownBoxDiv>
        <DropdownBox>
          <DropdownHover onSelect={firDropdownSelecthandle}>
            <DropdownNoHover variant="" id="dropdown-basic">
              {firCateTitle}
            </DropdownNoHover>
            <DropdownMenu>
              {firCateList.map((item, idx) => {
                return (
                  <Dropdown.Item
                    eventKey={item.name}
                    key={idx}
                    as={Link}
                    to={item.categoryId}
                  >
                    {item.name}
                  </Dropdown.Item>
                );
              })}
            </DropdownMenu>
          </DropdownHover>
          <DropdownHover onSelect={secDropdownSelecthandle}>
            <DropdownNoHover
              variant=""
              id="dropdown-basic"
              disabled={isSecCateDisabled}
            >
              {secCateTitle}
            </DropdownNoHover>
            <DropdownMenu>
              {secCateList?.map((item, idx) => {
                return (
                  <Dropdown.Item
                    eventKey={item.name}
                    key={idx}
                    as={Link}
                    to={item.categoryId}
                  >
                    {item.name}
                  </Dropdown.Item>
                );
              })}
            </DropdownMenu>
          </DropdownHover>
          <DropdownHover onSelect={thrDropdownSelecthandle}>
            <DropdownNoHover
              variant=""
              id="dropdown-basic"
              disabled={isThrCateDisabled}
            >
              {thrCateTitle}
            </DropdownNoHover>
            <DropdownMenu>
              {thrCateList?.map((item, idx) => {
                return (
                  <Dropdown.Item
                    eventKey={item.name}
                    key={idx}
                    as={Link}
                    to={item.categoryId}
                  >
                    {item.name}
                  </Dropdown.Item>
                );
              })}
            </DropdownMenu>
          </DropdownHover>
        </DropdownBox>
      </DropdownBoxDiv>
    </>
  );
}
