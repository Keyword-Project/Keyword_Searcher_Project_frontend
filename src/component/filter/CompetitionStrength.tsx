import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function CompetitionStrength() {
  const [value, setValue] = useState([4, 6]);

  function strengthhandleChange() {
    setValue(val);
   
  }
console.log(value)
  return (
    <>
      <div>경쟁강도</div>

      <ToggleButtonGroup
        type="checkbox"
        value={value}
        onChange={strengthhandleChange}
      >
        <ToggleButton id="tbg-btn-1" value={4}>
          0-10
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value={5}>
          숫자
        </ToggleButton>
        <ToggleButton id="tbg-btn-3" value={6}>
          숫자
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
