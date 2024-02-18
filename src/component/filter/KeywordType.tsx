import React from "react";
import Form from "react-bootstrap/Form";

export default function KeywordType() {
  return (
    <>
      <div>키워드 유형</div>
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="전체"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="쇼핑성"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="정보성"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </Form>
    </>
  );
}
