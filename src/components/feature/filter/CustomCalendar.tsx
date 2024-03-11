import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { dateFetch } from "components/feature/FetchSlice";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Calendar = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-left: 15px;
`;

const StlyedDateRangePicker = styled(DateRangePicker)`
  width: 50px;
  height: 50px;

  .react-daterange-picker__wrapper {
    border-radius: 5px;
    padding: 0px 10px;
  }
  .react-calendar {
    border-radius: 5px;
  }
`;

const CalendarBox = styled.div`
  margin: 0px 50px 40px 30px;
  width: 40%;
`;

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar() {
  const dispatch = useDispatch();
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  return (
    <CalendarBox>
      <Calendar>조회 기간</Calendar>
      <StlyedDateRangePicker
        onChange={onChange}
        value={value}
        autoFocus={true}
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

        onCalendarClose={() => {
          dispatch(
            dateFetch({
              startDate: value[0].toISOString(),
              endDate: value[1].toISOString(),
            })
          );
          console.log(value);
        }}
      />
    </CalendarBox>
  );
}
