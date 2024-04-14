import styled from "styled-components";
import SearchMethodTab from "components/feature/filter/SearchMethodTab";
const LayoutBox = styled.div`
  padding: 50px 20% 0px 20%;
  background-color: #f5f8fb;
`;

const Header = styled.div`
  width: 100%;
  height: 20.125rem;
  border-bottom: 1px solid #f0f0f0;
  background: #fcfcfc;
  padding-top: 2.4rem;
`;

const Title = styled.p`
  color: var(--Orange500);
  text-shadow: 2px 4px 6px rgba(37, 36, 62, 0.15);
  font-size: var(--font-size-title);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.18rem;
  text-align: center;
  font-family: PaytoneOne;
`;

const Subtitle = styled.p`
  color: #35231f;
  font-size: 1rem;
  text-align: center;
`;



export default function Layout(props) {
  return (
    <>
      <Header>
        <Title>Digging</Title>
        <Subtitle>
          쿠팡 리뷰 수 기반으로 쉽고 똑똑하게 판매아이템 발굴하자!
        </Subtitle>
        <SearchMethodTab />
      </Header>
      <LayoutBox>{props.children}</LayoutBox>
    </>
  );
}
