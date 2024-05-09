import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { dateFetch } from "lib/FetchSlice";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Calendar = styled.p`
  font-size: var(--font-size-primary);
  font-weight: bold;
`;

const StlyedDateRangePicker = styled(DateRangePicker)`
  height: 41px;

  .react-daterange-picker__wrapper {
    border-radius: 10px;
    border-color: #bdbdbd;
    border-style: solid;
    border-width: 2px;
    padding: 0px 5px;
    width: 220px;
    font-size: 12px;
    box-shadow: 0px 4px 10px 0px rgba(34, 39, 47, 0.1);
  }
  .react-calendar {
    border-radius: 5px;
  }
  .react-calendar__navigation {
    background-color: #c8c8ff;
  }
  .react-calendar__navigation__label {
    &:hover {
      text-decoration-line: underline;
      font-weight: bold;
      background-color: #c8c8ff !important;
    }
  }
  .react-calendar__navigation__arrow {
    &:hover {
      font-weight: bold;
      background-color: #c8c8ff !important;
    }
  }
  .react-calendar__tile {
    //일반 타일 -> 호버하면 호버가 적용됨
    &:hover {
      background-color: #c8c8ff !important;
    }
  }
  .react-calendar__tile--active {
    //클릭 + 선택 왼료시 적용되는 스타일

    background-color: #6e5bff !important;
  }
  .react-calendar__tile--range {
    &:hover {
      background-color: #c8c8ff !important;
    }
  }
  /* .react-calendar__tile--rangeStart{
    //range 선택 후 시작날짜의 색상 (호버아님 선택지정 후 색상)
    background-color: #c8c8ff !important;
  } */
  .react-calendar__tile--hover {
    //range 선택 시 시작날짜부터 종료날짜 사이의 호버된 날짜들의 색상(호버임)
    background-color: #c8c8ff !important;
  }
`;

const CalendarBox = styled.div`
  margin-bottom: 40px;
  width: 220px;
  height: 64px;
`;

function isValuePieceArray(value: Value): value is [ValuePiece, ValuePiece] {
  return Array.isArray(value);
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar() {
  const CalculateDateGap = (startDate : Date, endDate : Date) => {
    return Math.abs(startDate.valueOf() - endDate.valueOf());
  };

  const onCalendarClose = () => {
    if (isValuePieceArray(value)  && value[0] && value[1]) {
      // value가 [ValuePiece, ValuePiece] 인 경우

      const startDate = value[0]?.toISOString().split("T")[0];

      const differenceMs = CalculateDateGap(value[0], value[1]);

      const los = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

      dispatch(
        dateFetch({
          startDate: startDate,
          los: los,
        })
      );
    }
  };

  const dispatch = useDispatch();
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  return (
    <CalendarBox>
      <Calendar>조회 기간</Calendar>
      <StlyedDateRangePicker
        onChange={onChange}
        value={value}
        autoFocus={false}
        //달력 open시 자동 focus
        calendarAriaLabel={"Toggle calendar"}
        //잘 모르겠음
        calendarIcon={<FontAwesomeIcon icon={faCalendar} />}
        //달력 아이콘 설정
        clearAriaLabel={"Clear value이게뭔데"}
        closeCalendar={true}
        //날짜 선택 시 달력창 닫을지
        disableCalendar={false}
        //true하면 달력창이 안나옴 input칸만 나옵
        dayAriaLabel={"Day"}
        //label 어떻게 쓰는건지..
        format={"yyyy-MM-dd"}
        //날짜표시형식
        //"MMM dd, yyyy"는 "Jan 01, 2022"와 같은 형식
        rangeDivider={"-"}
        //날짜 사이 기호
        required={false}
        //>??
        showLeadingZeros={true}
        //옵션이 "true"로 설정된 경우 날짜가 "2022-01-05"와 같이 두 자리 수로 표시됩니다. 하지만 이 옵션이 "false"로 설정된 경우 날짜가 "2022-1-5"와 같이 한 자리 수로 표시됩니다.

        onCalendarClose={onCalendarClose}
      />
    </CalendarBox>
  );
}
