import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar() {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  const [startDate, setStartDate] = useState<string | undefined>();
  const [los, setLos] = useState<string | undefined>();

  const dateEncoding = () => {
    setLos(value[1].toISOString().split("T")[0]);
    setStartDate(value[0].toISOString().split("T")[0]);
  };

  console.log(value);

  return (
    <div>
      <DateRangePicker onChange={onChange} value={value} autoFocus={true} />
    </div>
  );
}
