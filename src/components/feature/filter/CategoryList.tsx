import styled from "styled-components";
import data from "dummyData/CategoriesData.json";


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
  

  const List1 = ["aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa"];
  const List2 = ["bb", "bb", "bb", "bb", "bb", "bb", "bb", "bb"];
  const List3 = ["cc", "cc", "cc", "cc", "cc", "cc", "cc", "cc"];
  return (
    <>
      <CategoriesContainer
        backgroundColor="var(--Orange500);"
        borderRadius="10px 0px 0px 10px"
        borderRight="none"
        left="216px"

     
      >
        <CategoriesListBox>
          {List1.map((item, idx) => {
            return (
              <Category key={idx}>
                <CategoryTitle color="white">{item}</CategoryTitle>
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
      >
        {" "}
        <CategoriesListBox>
          {List2.map((item, idx) => {
            return (
              <Category key={idx}>
                <CategoryTitle color="black">{item}</CategoryTitle>
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
      >
        {" "}
        <CategoriesListBox>
          {List3.map((item, idx) => {
            return (
              <Category key={idx}>
                <CategoryTitle color="black">{item}</CategoryTitle>
              </Category>
            );
          })}
        </CategoriesListBox>
      </CategoriesContainer>
    </>
  );
}
