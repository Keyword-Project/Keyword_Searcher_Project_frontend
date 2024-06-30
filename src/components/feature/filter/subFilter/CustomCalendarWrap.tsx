import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dateFetch } from "lib/FetchSlice";
import CustomCalendar from "./CustomCalendar";

function isValuePieceArray(value: Value): value is [ValuePiece, ValuePiece] {
  return Array.isArray(value);
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export type CustomCalendarProps = {
  onChange: (value: Value) => void;
  value: Value;
  today: Date;
};

export default function CustomCalendarWrap() {
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
   <CustomCalendar onChange={onChange} value={value} today={today}/>
  );
}
