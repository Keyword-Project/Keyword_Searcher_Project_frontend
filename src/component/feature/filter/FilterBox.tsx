import { useState } from "react";
import SearchItemCount from "./SearchItemCount";
import PriceInputBox from "./PriceInputBox";

import Button from "react-bootstrap/Button";
import CustomCalendar from "./CustomCalendar";




// import FilterBox from "../../../style/FilterBox.css"

export default function FilterBox() {
  const [isCalendar, setIsCalendar] = useState(false);
  return (
    <>
      <div>
        <p>FilterTable</p>
        <p>기간정하는 곳 (달력)</p>
        <div>
          <Button variant="primary">최근 30일</Button>
          <Button
            variant="secondary"
            onClick={() => {
              setIsCalendar(!isCalendar);
            }}
          >
            과거 선택
          </Button>
        </div>
        <div>{isCalendar ? <CustomCalendar /> : ""}</div>
        <div>
          <SearchItemCount />

          <PriceInputBox />
          <Button variant="primary">조회 </Button>
        </div>
      </div>
    </>
  );
}
