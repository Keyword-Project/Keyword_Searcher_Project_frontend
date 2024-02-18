import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function SearchCount() {
  const [searchValue, setSearchValue] = useState([1, 3]);


  function handleChange(val) {
    setSearchValue(val);

  }

  
  return (
    <>
      <div>검색수</div>

      <ToggleButtonGroup type="checkbox" value={searchValue} onChange={handleChange}>
        <ToggleButton id="tbg-btn-1" value={1}>
          0-500
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value={2}>
     숫자
        </ToggleButton>
        <ToggleButton id="tbg-btn-3" value={3}>
        숫자
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
