import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FilterBox from "../feature/filter/FilterBox";
import { useState } from "react";


export default function ItemKeywordPage() {


  const [keywordName, setKeywordName] = useState("");

  const keywordNameChange = (e) => {
    setKeywordName(e.target.value);
  };

  return (
    <>
      <p>키워드 검색</p>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="키워드를 입력해보세요. 예) 원피스"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={keywordNameChange}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button 이거필요한가..?
        </Button>
      </InputGroup>
      <FilterBox keywordName={keywordName} />
  

    </>
  );
}
