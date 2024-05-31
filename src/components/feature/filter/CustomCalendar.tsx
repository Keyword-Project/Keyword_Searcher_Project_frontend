import { useEffect, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { dateFetch } from "lib/FetchSlice";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Tooltip from "components/common/Tooltip";

const Calendar = styled.p`
  font-size: var(--font-size-primary);
  font-weight: bold;
  margin-right: 0.375rem;
`;
const CalendarTitleField = styled.div`
  display: flex;
`;

const StlyedDateRangePicker = styled(DateRangePicker)`
  height: 2.5rem;

  .react-daterange-picker__wrapper {
    border-radius: 10px;
    border-color: #bdbdbd;
    border-style: solid;
    border-width: 2px;
    padding: 0px 5px;
    width: 15rem;
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
  }
  .react-calendar {
    border-radius: 5px;
  }
  .react-calendar__navigation {
    background-color: #c8c8ff;
  }
  .react-calendar__navigation__label {
    background-color: var(--Orange500);
    &:hover {
      font-weight: bold;
      background-color: var(--Orange500) !important;
    }
  }

  .react-calendar__navigation__arrow {
    background-color: var(--Orange500) !important;
    &:hover {
      font-weight: bold;
      background-color: var(--Orange500) !important;
    }
  }
  .react-calendar__navigation__prev2-button {
    background-color: var(--Orange500) !important;
    &:hover {
      font-weight: bold;
      background-color: var(--Orange500) !important;
    }
  }
  .react-calendar__decade-view__years__year {
  }
  .react-calendar__tile {
    //일반 타일 -> 호버하면 호버가 적용됨
    &:hover {
      background-color: var(--Gray500) !important;
      font-weight: bold;
      color: var(--Orange500);
    }
  }
  .react-calendar__tile--active {
    //클릭 + 선택 왼료시 적용되는 스타일
    background-color: var(--Gray500) !important;
    font-weight: bold;
    color: var(--Orange500);
  }
  .react-calendar__tile--range {
    &:hover {
      background-color: var(--Gray500) !important;
      font-weight: bold;
      color: var(--Orange500);
    }
  }

  .react-calendar__tile--hover {
    //range 선택 시 시작날짜부터 종료날짜 사이의 호버된 날짜들의 색상(호버임)
    background-color: var(--Gray500) !important;
    font-weight: bold;
    color: var(--Orange500);
  }

  .react-calendar__tile--now {
    //오늘 날짜
    background-color: #268dff !important;
    color: white !important;
  }

  .react-calendar__tile--rangeEnd {
    background-color: var(--Gray500) !important;
    font-weight: bold;
    color: var(--Orange500);
  }
`;

const CalendarBox = styled.div`
  width: 250px;
  height: 64px;
`;

function isValuePieceArray(value: Value): value is [ValuePiece, ValuePiece] {
  return Array.isArray(value);
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar() {
  const dispatch = useDispatch();
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  const today = new Date();

  useEffect(() => {
    const CalculateDateGap = (startDate: Date, endDate: Date) => {
      return Math.abs(startDate.getTime() - endDate.getTime());
    };

    function formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
    }

    if (isValuePieceArray(value) && value[0] && value[1]) {
      // value가 [ValuePiece, ValuePiece] 인 경우
      const startDate = formatDate(value[0]);
      const differenceMs = CalculateDateGap(value[0], value[1]);

      const los = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

      dispatch(
        dateFetch({
          startDate: startDate,
          los: los,
        })
      );
    }
  }, [value]);

  return (
    <CalendarBox>
      <CalendarTitleField>
        <Calendar>조회 기간</Calendar>

        <Tooltip content="기간을 선택하면 해당 기간의 키워드가 출력됩니다. 기간 미 선택 시 최근 14일 키워드가 조회됩니다." />
      </CalendarTitleField>

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
        //??
        showLeadingZeros={true}
        //옵션이 "true"로 설정된 경우 날짜가 "2022-01-05"와 같이 두 자리 수로 표시됩니다. 하지만 이 옵션이 "false"로 설정된 경우 날짜가 "2022-1-5"와 같이 한 자리 수로 표시됩니다.
        maxDate={today}
      />
    </CalendarBox>
  );
}
