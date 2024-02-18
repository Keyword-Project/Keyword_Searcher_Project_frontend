import React from "react";
import { Form } from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";

export default function RangeAge() {
  return (
    <>
      <div>RangeAge</div>
      <Form.Label>연령</Form.Label>
      <Form.Range />
    </>
  );
}
