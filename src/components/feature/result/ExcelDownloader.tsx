import { CSVLink } from "react-csv";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


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
  font-weight: bold;
`;

const StyledCSVLink = styled(CSVLink)`
  color: black;
  margin-left: 5px;
  text-decoration-line: none;
`;

export default function ExcelDownloader( {transformedData} ) {
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
