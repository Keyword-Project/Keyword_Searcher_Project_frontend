import styled from "styled-components";
import { Outlet } from "react-router-dom";

const LayoutBox = styled.div`
  margin: 0px 20%;
`;

export default function Layout(props) {
  return (
    <>
      <LayoutBox>{props.children}</LayoutBox>
    </>
  );
}
