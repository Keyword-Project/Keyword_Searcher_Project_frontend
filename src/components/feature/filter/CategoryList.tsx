import styled from "styled-components";

const CategoriesContainer = styled.div`
  width: 639px;
  height: 456px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: var(--Orange500);
  background-color: var(--Orange500);
  margin-top: 5px;
  display: flex;
`;

const ClassifiedCategoriesContainer = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border-right: ${(props) => props.borderRight};
  padding: 12px 0px 12px 12px;
`;

const FirstCategoriesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstCategoryBox = styled.div`
  width: 206px;
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
  font-size: 16px;
  color
`;

export default function CategoryList() {
  const List1 = ["aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa"];
  const List2 = ["bb", "bb", "bb", "bb", "bb", "bb", "bb", "bb"];
  const List3 = ["cc", "cc", "cc", "cc", "cc", "cc", "cc", "cc"];
  return (
    <>
      <CategoriesContainer>
        <ClassifiedCategoriesContainer
          backgroundColor="var(--Orange500);"
          width="33%"
          borderRadius="10px 0px 0px 10px"
          borderRight="none"
        >
          <FirstCategoriesList>
            {List1.map((item, idx) => {
              return (
                <FirstCategoryBox key={idx}>
                  <CategoryTitle color="white">{item}</CategoryTitle>
                </FirstCategoryBox>
              );
            })}
          </FirstCategoriesList>
        </ClassifiedCategoriesContainer>
        <ClassifiedCategoriesContainer
          backgroundColor="white"
          width="33%"
          borderRadius="0px"
          borderRight="2px solid #747578"
        >
          {" "}
          <FirstCategoriesList>
            {List2.map((item, idx) => {
              return (
                <FirstCategoryBox key={idx}>
                  <CategoryTitle color="black">{item}</CategoryTitle>
                </FirstCategoryBox>
              );
            })}
          </FirstCategoriesList>
        </ClassifiedCategoriesContainer>
        <ClassifiedCategoriesContainer
          backgroundColor="white"
          width="34%"
          borderRight="none"
          borderRadius="0px 10px 10px 0px"
        >
          {" "}
          <FirstCategoriesList>
            {List3.map((item, idx) => {
              return (
                <FirstCategoryBox key={idx}>
                  <CategoryTitle color="black">{item}</CategoryTitle>
                </FirstCategoryBox>
              );
            })}
          </FirstCategoriesList>
        </ClassifiedCategoriesContainer>
      </CategoriesContainer>
    </>
  );
}
