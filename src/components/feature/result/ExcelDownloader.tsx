import { CSVLink } from "react-csv";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { SearchData } from "type/searchData";

const ExcelDownloadBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0px;
`;

const ExcelButton = styled.button`
  width: 140px;
  height: 30px;
  font-size: 12px;
  border-radius: 0.625rem;
  font-weight: bold;
`;

const StyledCSVLink = styled(CSVLink)`
  color: black;
  margin-left: 5px;

  text-decoration-line: none;
`;

export default function ExcelDownloader({
  searchData,
}: {
  searchData: SearchData;
}) {
  let transformedData;

  if (searchData?.body != undefined) {
    transformedData = searchData?.body.map((item) => ({
      키워드: item.name,
      가격: item.priceValue,
      "총 리뷰 수": item.ratingTotalCount,
      상품경쟁력: `${(
        (item.ratingVipCount / item.ratingTotalCount) *
        100
      ).toFixed(1)}%`,
      로켓배송: item.dataIsRocket ? "가능" : "불가능",
    }));
  }

  return (
    <>
      <ExcelDownloadBtnDiv>
        {transformedData != undefined && (
          <ExcelButton>
            <FontAwesomeIcon icon={faDownload} />

            <StyledCSVLink data={transformedData}>엑셀 다운로드</StyledCSVLink>
          </ExcelButton>
        )}
      </ExcelDownloadBtnDiv>
    </>
  );
}
