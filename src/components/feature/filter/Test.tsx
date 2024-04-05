import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const ComponentA = styled.div`
  width: 200px;
  height: 100px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgreen;
  }
`;

const ComponentB = styled.div`
  width: 300px;
  height: 150px;
  background-color: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transition: visibility 0.3s ease, opacity 0.3s ease;
`;

const Test = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Container>
      <ComponentA onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        Hover Over Me
      </ComponentA>
      <ComponentB isVisible={isHovered}>Component B</ComponentB>
    </Container>
  );
};

export default Test;
