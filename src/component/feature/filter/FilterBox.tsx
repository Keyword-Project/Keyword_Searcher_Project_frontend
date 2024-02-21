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
        <p>날짜 설정</p>
        <div>
          <Button>최근 14일</Button>
          <Button
            variant="secondary"
            onClick={() => {
              setIsCalendar(!isCalendar);
            }}
          >
            기간 설정
          </Button>
        </div>
        <div>{isCalendar && <CustomCalendar />}</div>
        <div>
          <SearchItemCount />

          <PriceInputBox />
          <Button variant="primary">조회 </Button>
        </div>
      </div>
    </>
  );
}
