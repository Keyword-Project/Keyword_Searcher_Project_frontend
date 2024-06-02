/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import data from "dummyData/CategoriesData.json";
import { useState } from "react";
import Arrow_Forward from "assets/icons/arrow_forward.svg?react";
import { Link } from "react-router-dom";
import CategoryButton from "components/common/CategoryButton";
import {  ClassifiedCategoriesFieldProps } from "type/categoryList";

const StyledArrow_Forward = styled(Arrow_Forward)<{ show: boolean }>`
  position: absolute;
  top: 0.8rem;
  right: 2.5rem;
  opacity: ${(props) => (props.show ? "1" : "0")};
  background-color: black;
`;

const ClassifiedCategoriesField = styled.div<ClassifiedCategoriesFieldProps>`
  overflow: auto;
  width: 15rem;
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

    const [selectedFirstCategory, setSelectedFirstCategory] = useState(null);
    const [selectedSecondCategory, setSelectedSecondCategory] = useState(null);
    const [selectedThirdCategory, setSelectedThirdCategory] = useState(null);
    // selected는 카테고리가 존재하느냐 아니냐 판단하는 변수
    // 카테고리가 존재하면 렌더링, null값이면 존재하지 않으면 사라짐
    const [hoveredFirstCategory, setHoveredFirstCategory] = useState(null);
    const [hoveredSecondCategory, setHoveredSecondCategory] = useState(null);
    const [hoveredThirdCategory, setHoveredThirdCategory] = useState(null);
      // hovered는 마우스가 올라가있는 카테고리에 화살표 아이콘을 띄우는 함수
      //null값이면 화살표 아이콘이 띄워지지 않음





  const closeEveryCategoryField = () => {
    setSelectedFirstCategory(null);
    setSelectedSecondCategory(null);
    setSelectedThirdCategory(null);
    setHoveredFirstCategory(null)
    setHoveredSecondCategory(null)
    setHoveredThirdCategory(null)
  };

  return (
    <>
      <CategoryContainer onMouseLeave={() => closeEveryCategoryField()}>
          <CategoryButton
            title="카테고리"
            BackGroundColor="var(--Orange500)"
            color="white"
            borderColor="var(--Orange500)"
            setSelectedFirstCategory={setSelectedFirstCategory}
            setSelectedSecondCategory={setSelectedSecondCategory}
            setHoveredFirstCategory={setHoveredFirstCategory}
            data={data}
           
          />
 <ClassifiedCategoriesField
            backgroundColor="var(--Orange500)"
            borderRadius="0px 0px 0px 10px"
            borderRight="none"
            left="0px"
            isVisible={selectedFirstCategory !== null}
            onMouseOver={() => {setSelectedThirdCategory(null)
            }}
          >
            {data.firstCategories.map((item, index) => {
              return (
                <Category
                  key={index}
                  onMouseEnter={() => {
                    setSelectedSecondCategory(item)
                    setHoveredFirstCategory(item)
                    setHoveredSecondCategory(null)
                  }}
                
                 
                >
                  <CategoryListLink
                    to={item.categoryId}
                    onClick={() => closeEveryCategoryField()}
                    color="white"
                  >
                    {item.name}
                  </CategoryListLink>
                  <StyledArrow_Forward show={hoveredFirstCategory === item} />
                </Category>
              );
            })}
          </ClassifiedCategoriesField>
   
<ClassifiedCategoriesField
          backgroundColor="var(--Gray200)"
          borderRadius="0px"
          borderRight="2px solid var(--Gray700)"
          left="216px"
          isVisible={selectedSecondCategory !== null}
        >
          {selectedSecondCategory?.secondCategories?.map((item, index) => {
            return (
              <Category
                key={index}
                onMouseEnter={() => {
                  setSelectedThirdCategory(item)
                  setHoveredSecondCategory(item)
                }}
                onMouseLeave={() => {
                  if(!selectedThirdCategory) {
                    setHoveredSecondCategory(null)
                  }
                 
                }}
              
              >
                <CategoryListLink
                  to={item.categoryId}
                  onClick={() => closeEveryCategoryField()}
                  color="black"
                >
                  {item.name}
                </CategoryListLink>
                <StyledArrow_Forward show={hoveredSecondCategory === item} />
              </Category>
            );
          })}
        </ClassifiedCategoriesField>
   <ClassifiedCategoriesField
          backgroundColor="var(--Gray200)"
          borderRight="none"
          borderRadius="0px 10px 10px 0px"
          left="432px"
          isVisible={selectedThirdCategory !== null}
        >
      
          {selectedThirdCategory?.thirdCategories?.map((item, index) => {
            return (
              <Category
                key={index}
                onMouseEnter={() =>
                  setHoveredThirdCategory(index)
                }
                onMouseLeave={() => {
                  setHoveredThirdCategory(null)
                }}
              >
                <CategoryListLink
                  onClick={() => closeEveryCategoryField()}
                  to={item.categoryId}
                  color="black"
                >
                  {item.name}
                </CategoryListLink>

                <StyledArrow_Forward show={hoveredThirdCategory === index} />
              </Category>
            );
          })}
        </ClassifiedCategoriesField>
      </CategoryContainer>
       
    </>
  );
}
