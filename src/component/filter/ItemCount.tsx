import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function ItemCount() {
  const [value, setValue] = useState([1, 3]);

  
  const handleChange = (value) => setValue(value);
  console.log(value)
  return (
    <>
      <div>상품수</div>

      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton id="tbg-btn-4" value={1}>
          0-500
        </ToggleButton>
        <ToggleButton id="tbg-btn-5" value={2}>
     숫자
        </ToggleButton>
        <ToggleButton id="tbg-btn-6" value={3}>
        숫자
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
