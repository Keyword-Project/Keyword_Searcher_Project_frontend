import styled from "styled-components";
import data from "dummyData/CategoriesData.json";
import { useState } from "react";

const CategoriesContainer = styled.div`
  width: 216px;
  margin-top: 5px;
  z-index: 2;
  height: 456px;
  left: ${(props) => props.left};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border-right: ${(props) => props.borderRight};
  padding: 12px 0px 12px 12px;
  position: absolute;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: visibility 0.3s ease, opacity 0.3s ease;
`;

const CategoriesListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  width: 100%;
  height: 36px;
  padding: 7px 8px;
  &:hover {
    background-color: white;
    p {
      color: var(--Orange500);
    }
  }
`;

const CategoryTitle = styled.p`
  color: ${(props) => props.color};
  font-size: var(--font-size-primary);
`;

export default function CategoryList() {
  const [firstIsHovered, setFirstIsHovered] = useState(false);
  const [secondIsHovered, setSecondIsHovered] = useState(false);
  const [thirdIsHovered, setThirdIsHovered] = useState(false);
  const [secondCategory, setSecondCategory] = useState([]);
  const [thirdCategory, setThirdCategory] = useState([]);

  const firCateHoverHandler = (index) => {
    setSecondCategory(
      (prev) => (prev = data.firstCategories[index].secondCategories)
    );
  };


  const secCateHoverHandler = (index) => {
    setThirdCategory(
      (prev) => (prev = secondCategory[index].thirdCategories)
    );
  };


  return (
    <>
      <button
        onMouseEnter={() => setFirstIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        실험용 버튼
      </button>
      <CategoriesContainer
        backgroundColor="var(--Orange500)"
        borderRadius="10px 0px 0px 10px"
        borderRight="none"
        left="216px"
        isVisible={firstIsHovered}
        onMouseEnter={() => setSecondIsHovered(true)}
      >
        <CategoriesListBox>
          {data.firstCategories.map((item, index) => {
            return (
              <Category key={index}>
                <CategoryTitle
                  onMouseEnter={() => firCateHoverHandler(index)}
                  color="white"
                >
                  {item.name}
                </CategoryTitle>
              </Category>
            );
          })}
        </CategoriesListBox>
      </CategoriesContainer>
      <CategoriesContainer
        backgroundColor="white"
        borderRadius="0px"
        borderRight="2px solid var(--Gray700)"
        left="432px"
        isVisible={secondIsHovered}
        onMouseEnter={() => setThirdIsHovered(true)}
      >
        <CategoriesListBox>
          {secondCategory?.map((item, index) => {
            return (
              <Category key={index}>
                <CategoryTitle color="black"   onMouseEnter={() => secCateHoverHandler(index)}>{item.name}</CategoryTitle>
              </Category>
            );
          })}
        </CategoriesListBox>
      </CategoriesContainer>
      <CategoriesContainer
        backgroundColor="white"
        borderRight="none"
        borderRadius="0px 10px 10px 0px"
        left="648px"
        isVisible={thirdIsHovered}
      >
        {" "}
        <CategoriesListBox>
          {thirdCategory?.map((item, index) => {
            return (
              <Category key={index}>
                <CategoryTitle color="black">{item.name}</CategoryTitle>
              </Category>
            );
          })}
        </CategoriesListBox>
      </CategoriesContainer>
    </>
  );
}
