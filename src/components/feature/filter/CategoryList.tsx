/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import data from "dummyData/CategoriesData.json";
import { useState } from "react";
import Arrow_Forward from "assets/icons/arrow_forward.svg?react";
import { Link } from "react-router-dom";
import Button from "components/common/Button";

const StyledArrow_Forward = styled(Arrow_Forward)<{show : boolean}>`
  position: absolute;
  top: 10px;
  right: 12px;
  opacity: ${(props) => (props.show ? "1" : "0")};
`;

interface Category {
  name: string;
  categoryId: string;
  thirdCategories: Category[];
}

interface ClassifiedCategoriesFieldProps {
  backgroundColor: string;
  left: string;
  borderRadius: string;
  borderRight: string;
  isVisible: boolean;
}

const ClassifiedCategoriesField = styled.div<ClassifiedCategoriesFieldProps>`
  overflow: auto;
  width: 216px;
  z-index: 2;
  top: 2.5rem;
  opacity: 1;
  height: 30rem;
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

const CategoryListLink = styled(Link)`
  text-decoration-line: none;
  color: ${(props) => props.color};
`;
const Category = styled.div`
  width: 100%;
  height: 36px;
  padding: 7px 8px;
  position: relative;
  &:hover {
    background-color: var(--Gray200);
    cursor: pointer;
    ${CategoryListLink} {
      color: var(--Orange500);
      text-decoration: underline;
    }
  }
`;


export default function CategoryList() {
  const [firstIsHovered, setFirstIsHovered] = useState(false);
  const [secondIsHovered, setSecondIsHovered] = useState(false);
  const [thirdIsHovered, setThirdIsHovered] = useState(false);
  const [secondCategory, setSecondCategory] = useState<Category[]>([]);
  const [thirdCategory, setThirdCategory] = useState<Category[]>([]);
  const [IsArrowVisible, setIsArrowVisible] = useState<number | null>(null);

  const arrowVisibleHandler = (index: number, func: (index: number) => void) => {
    func(index);
  };

  const secondCateSelectHandler = (index: number) => {
    setSecondCategory(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (prev) => (prev = data.firstCategories[index].secondCategories as Category[])
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
          <Button
            title="카테고리"
            BackGroundColor="var(--Orange500)"
            color="white"
            borderColor="var(--Orange500)"
          />

          <ClassifiedCategoriesField
            backgroundColor="var(--Orange500)"
            borderRadius="0px 0px 0px 10px"
            borderRight="none"
            left="0px"
            isVisible={firstIsHovered}
            onMouseEnter={() => secondCateFieldOpen()}
          >
            {data.firstCategories.map((item, index) => {
              return (
                <Category
                  key={index}
                  onMouseEnter={() => {
                    arrowVisibleHandler(index, setIsArrowVisible);
                    secondCateSelectHandler(index);
                  }}
                  onMouseLeave={() => setIsArrowVisible(null)}
                >
                  <CategoryListLink
                    to={item.categoryId}
                    onClick={() => everyCategoryFieldClose()}
                    color="white"
                  >
                    {item.name}
                  </CategoryListLink>

                  <StyledArrow_Forward show={IsArrowVisible === index} />
                </Category>
              );
            })}
          </ClassifiedCategoriesField>
        </ButtonBox>

        <ClassifiedCategoriesField
          backgroundColor="var(--Gray200)"
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
                onMouseEnter={() => {
                  arrowVisibleHandler(index, setIsArrowVisible);
                  thirdCateSelectHandler(index);
                }}
                onMouseLeave={() => setIsArrowVisible(null)}
              >
                <CategoryListLink
                  to={item.categoryId}
                  onClick={() => everyCategoryFieldClose()}
                  color="black"
                >
                  {item.name}
                </CategoryListLink>

                <StyledArrow_Forward show={IsArrowVisible === index} />
              </Category>
            );
          })}
        </ClassifiedCategoriesField>
        <ClassifiedCategoriesField
          backgroundColor="var(--Gray200)"
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
                <CategoryListLink
                  onClick={() => everyCategoryFieldClose()}
                  to={item.categoryId}
                  color="black"
                >
                  {item.name}
                </CategoryListLink>

                <StyledArrow_Forward show={IsArrowVisible === index} />
              </Category>
            );
          })}
        </ClassifiedCategoriesField>
      </CategoryContainer>
    </>
  );
}
