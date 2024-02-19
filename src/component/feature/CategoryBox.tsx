import Dropdown from "react-bootstrap/Dropdown";

export default function categoryBox() {
  return (
    <>
    
      <div className="">
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              1차분류
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/category">패션의류</Dropdown.Item>
              <Dropdown.Item href="/category">패션잡화</Dropdown.Item>
              <Dropdown.Item href="/category">식품</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              2차분류
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/category">여성의류</Dropdown.Item>
              <Dropdown.Item href="/category">남성의류</Dropdown.Item>
              <Dropdown.Item href="/category">어쩌구저쩌구</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              3차분류
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/category">팬티</Dropdown.Item>
              <Dropdown.Item href="/category">러닝세트</Dropdown.Item>
              <Dropdown.Item href="/category">잠옷</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
