import styled from "styled-components";
import data from "dummyData/CategoriesData.json";
import { SetStateAction, useState } from "react";
import Arrow_Forward from "assets/icons/arrow_forward.svg?react";
import { Link } from "react-router-dom";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

const StyledArrow_Forward = styled(Arrow_Forward)`
  position: absolute;
  top: 10px;
  right: 12px;
  opacity: ${(props) => (props.show ? "1" : "0")};
`;

const ClassifiedCategoriesField = styled.div`
  overflow: auto;
  width: 216px;
  z-index: 2;
  top: 25px;
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
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 0.4375rem;
    height: 25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.21875rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(0, 0, 0, 0.5);
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const ButtonBox = styled.div`
  z-index: 5;
  width: 100.55px;
`;

const CategoryContainer = styled.div`
  position: relative;
  width: 3px;
`;

const Category = styled.div`
  width: 100%;
  height: 36px;
  padding: 7px 8px;
  position: relative;
  &:hover {
    background-color: white;
    p {
      color: var(--Orange500);
      cursor: pointer;
      text-decoration: underline;
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
  const [IsArrowVisible, setIsArrowVisible] = useState(null);

  const arrowVisibleHandler = (index: number, func) => {
    func(index);
  };

  const secondCateSelectHandler = (index: number) => {
    setSecondCategory(
      (prev) => (prev = data.firstCategories[index].secondCategories)
    );
  };

  const thirdCateSelectHandler = (index: number) => {
    setThirdCategory((prev) => (prev = secondCategory[index].thirdCategories));
  };

  const secondCateFieldOpen = () => {
    setSecondIsHovered(true);
    if (thirdCategory.length > 0) {
      setThirdIsHovered(false);
    }
  };

  const leaveCategoryButton = () => {
    if (secondCategory.length == 0) {
      setFirstIsHovered(false);
    }
  };

  const everyCategoryFieldClose = () => {
    setFirstIsHovered(false);
    setSecondIsHovered(false);
    setThirdIsHovered(false);
  };

  return (
    <>
      <CategoryContainer onMouseLeave={() => everyCategoryFieldClose()}>
        <ButtonBox
          onMouseOver={() => setFirstIsHovered(true)}
          onMouseLeave={() => leaveCategoryButton()}
        >
          <button>실험용 버튼</button>

          <ClassifiedCategoriesField
            backgroundColor="var(--Orange500)"
            borderRadius="10px 0px 0px 10px"
            borderRight="none"
            left="0px"
            isVisible={firstIsHovered}
            onMouseEnter={() => secondCateFieldOpen()}
          >
            {data.firstCategories.map((item, index) => {
              return (
                <Category
                  key={index}
                  onMouseEnter={() =>
                    arrowVisibleHandler(index, setIsArrowVisible)
                  }
                  onMouseLeave={() => setIsArrowVisible(null)}
                >
                  <CategoryTitle
                    onMouseEnter={() => secondCateSelectHandler(index)}
                    color="white"
                  >
                    <Link to={item.categoryId}>{item.name}</Link>
                  </CategoryTitle>
                  <StyledArrow_Forward show={IsArrowVisible === index} />
                </Category>
              );
            })}
          </ClassifiedCategoriesField>
        </ButtonBox>

        <ClassifiedCategoriesField
          backgroundColor="white"
          borderRadius="0px"
          borderRight="2px solid var(--Gray700)"
          left="216px"
          isVisible={secondIsHovered}
          onMouseEnter={() => setThirdIsHovered(true)}
        >
          {secondCategory?.map((item, index) => {
            return (
              <Category
                key={index}
                onMouseEnter={() =>
                  arrowVisibleHandler(index, setIsArrowVisible)
                }
                onMouseLeave={() => setIsArrowVisible(null)}
              >
                <CategoryTitle
                  color="black"
                  onMouseEnter={() => thirdCateSelectHandler(index)}
                >
                  <Link to={item.categoryId}>{item.name}</Link>
                </CategoryTitle>
                <StyledArrow_Forward show={IsArrowVisible === index} />
              </Category>
            );
          })}
        </ClassifiedCategoriesField>
        <ClassifiedCategoriesField
          backgroundColor="white"
          borderRight="none"
          borderRadius="0px 10px 10px 0px"
          left="432px"
          isVisible={thirdIsHovered}
        >
          {" "}
          {thirdCategory?.map((item, index) => {
            return (
              <Category
                key={index}
                onMouseEnter={() =>
                  arrowVisibleHandler(index, setIsArrowVisible)
                }
                onMouseLeave={() => setIsArrowVisible(null)}
              >
                <CategoryTitle color="black">
                  {" "}
                  <Link to={item.categoryId}>{item.name}</Link>
                </CategoryTitle>
                <StyledArrow_Forward show={IsArrowVisible === index} />
              </Category>
            );
          })}
        </ClassifiedCategoriesField>
      </CategoryContainer>
    </>
  );
}
