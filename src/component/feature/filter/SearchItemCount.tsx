import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function SearchItemCount() {
  const [searchValue, setSearchValue] = useState([1, 3]);

  function handleChange(val) {
    setSearchValue(val);
  }

  return (
    <>
      <div>검색 상품 수</div>

      <ToggleButtonGroup
        type="checkbox"
        value={searchValue}
        onChange={handleChange}
      >
        <ToggleButton id="tbg-btn-7" value={1}>
         30-100
        </ToggleButton>
        <ToggleButton id="tbg-btn-8" value={2}>
          100 -1000
        </ToggleButton>
        <ToggleButton id="tbg-btn-9" value={3}>
        1000-10000
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
