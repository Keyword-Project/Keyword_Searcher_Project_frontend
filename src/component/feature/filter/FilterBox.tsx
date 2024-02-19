import { useState } from "react";
import KeywordType from "./KeywordType";
import Gender from "./Gender";
import RangeAge from "./RangeAge";
import SearchCount from "./SearchCount";
import ItemCount from "./ItemCount";
import CompetitionStrength from "./CompetitionStrength";
import Button from "react-bootstrap/Button";
import CustomCalendar from "./CustomCalendar";

// import FilterBox from "../../../style/FilterBox.css"



export default function FilterBox() {
  const [isCalendar, setIsCalendar] = useState(false);
  return (
    <>
      <div>
        <p>FilterTable</p>
        <p>기간정하는 곳</p>
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
          <KeywordType />
          <Gender />
          <RangeAge />
          <SearchCount />
          <ItemCount />
          <CompetitionStrength />
        </div>
      </div>
    </>
  );
}
