import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return <Calendar onChange={onChange} value={value} />;
}
