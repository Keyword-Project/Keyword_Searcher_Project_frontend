import styled from "styled-components";
import QuestionMark from "assets/icons/question_mark.svg?react";

const StyledDiv = styled.div`
  display: inline;
  cursor: help;
  position: relative;

  &::before,
  &::after {
    left: 50%;
    opacity: 0;
    position: absolute;
    z-index: -100;
  }

  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1) translateY(0);
    z-index: 100;
  }

  //삼각형으로 예상되는 곳
  &::before {
    border-style: solid;
    border-width: 1em 0.75em 0 0.75em;
    border-color: #3e474f transparent transparent transparent;
    bottom: 100%;
    content: "";
    margin-left: -0.5em;
    transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26),
      opacity 0.65s 0.5s;
    transform: scale(0.6) translateY(-90%);
  }

  &:hover::before,
  &:focus::before {
    transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
  }

  //글귀 나오는 곳
  &::after {
    background: #3e474f;
    border-radius: 0.25em;
    bottom: 180%;
    color: var(--white-color-300);
    font-size: var(--font-size-small);
    content: attr(data-tip);
    margin-left: -8.75em;
    margin-bottom: -1rem;
    padding: 1em;
    transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
    transform: scale(0.6) translateY(50%);
    width: 17.5em;
  }

  &:hover::after,
  &:focus::after {
    transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);
  }
`;

const Tooltip = ({ content }: { content: string }) => {
  return (
    <>
      <StyledDiv data-tip={content}>
        <QuestionMark width="1.5rem" height="1.5rem" />
      </StyledDiv>
    </>
  );
};

export default Tooltip;
