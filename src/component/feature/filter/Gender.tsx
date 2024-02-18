import React from 'react'
import Form from "react-bootstrap/Form";



export default function Gender() {
  return (
    <>
    <div>성별</div>
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
              label="남성"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="여성"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </Form>
    </>
  )
}
