import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

export default function categoryTable() {
  return (
    <>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            1차분류
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">패션의류</Dropdown.Item>
            <Dropdown.Item href="#/action-2">패션잡화</Dropdown.Item>
            <Dropdown.Item href="#/action-3">식품</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            2차분류
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">여성의류</Dropdown.Item>
            <Dropdown.Item href="#/action-2">남성의류</Dropdown.Item>
            <Dropdown.Item href="#/action-3">어쩌구저쩌구</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            3차분류
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">팬티</Dropdown.Item>
            <Dropdown.Item href="#/action-2">러닝세트</Dropdown.Item>
            <Dropdown.Item href="#/action-3">잠옷</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
