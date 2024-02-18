import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function ItemCount() {
  const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (value) => setValue(value);
  return (
    <>
      <div>상품수</div>

      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
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
