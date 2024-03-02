import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { dateFetch } from "components/feature/FetchSlice";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar() {
  const dispatch = useDispatch();
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={value}
        autoFocus={true}
        //달력 open시 자동 focus
        calendarAriaLabel={"Toggle calendar"}
        //잘 모르겠음
        calendarIcon={"달력 아이콘!"}
        //달력 아이콘 설정
        clearAriaLabel={"Clear value이게뭔데 씹덕아"}
        closeCalendar={false}
        //날짜 선택 시 달력창 닫을지
        disableCalendar={false}
        //true하면 달력창이 안나옴 input칸만 나옵
        dayAriaLabel={"Day"}
        //label 어떻게 쓰는건지..
        format={"y-MM-dd"}
        //날짜표시형식
        //"MMM dd, yyyy"는 "Jan 01, 2022"와 같은 형식
        rangeDivider={" to "}
        //날짜 사이 기호
        required={false}
        //>??
        showLeadingZeros={true}
        //옵션이 "true"로 설정된 경우 날짜가 "2022-01-05"와 같이 두 자리 수로 표시됩니다. 하지만 이 옵션이 "false"로 설정된 경우 날짜가 "2022-1-5"와 같이 한 자리 수로 표시됩니다.

        onCalendarClose={() => {
          dispatch(
            dateFetch({
              startDate: value[0].toISOString(),
              los: value[1].toISOString(),
            })
          );
          console.log(value);
        }}
      />
    </div>
  );
}
