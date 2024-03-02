import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useDispatch } from "react-redux";
import { pathNameFetch } from "components/feature/FetchSlice";

export default function KeywordInput() {
  const keywordNameChange = (e) => {
    dispatch(pathNameFetch(e.target.value));
  };
  const dispatch = useDispatch();

  return (
    <div>
      <p>키워드 검색</p>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="키워드를 입력해보세요. 예) 원피스"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={keywordNameChange}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </div>
  );
}
