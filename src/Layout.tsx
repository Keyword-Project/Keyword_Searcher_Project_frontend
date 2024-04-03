import styled from "styled-components";
import SearchTab from "components/feature/Tab/SearchTab";
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
  color: #ff782b;
  text-shadow: 2px 4px 6px rgba(37, 36, 62, 0.15);
  font-family: "Paytone One";
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.18rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #35231f;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
        <SearchTab />
      </Header>
      <LayoutBox>{props.children}</LayoutBox>
    </>
  );
}
