import { Link } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import KeywordInput from "components/feature/filter/KeywordInput";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: bold;
`;

export default function SearchTab() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "48%",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "15%",
          }}
        >
          <div
            style={{
              width: "150px",
              position: "relative",
              alignContent: "flex-end",
            }}
          >
            <div
              style={{
                left: 4,
                top: 0,
                color: "#363332",
                fontSize: 20,
                fontFamily: "Noto Sans KR",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              <StyledLink to="/category">리뷰 수 분석 검색</StyledLink>
            </div>
            <div
              style={{
                width: 142,
                height: 4,
                left: 0,
                top: 36,
                background: "#363332",
              }}
            />
          </div>
          <div
            style={{
              width: "150px",
              position: "relative",
              alignContent: "flex-end",
            }}
          >
            <div
              style={{
                color: "#363332",
                fontSize: 20,
                fontFamily: "Noto Sans KR",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              <StyledLink to="/keyword">시즌 상품 검색</StyledLink>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
