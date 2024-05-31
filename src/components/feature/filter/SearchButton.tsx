import styled from "styled-components";
import media from "styles/media";
import { ButtonProps } from "type/button";
const StyledButton = styled.button`
  padding: 0px 10px;
  border-radius: 9px;
  font-size: 1rem;
  color: #eaeaea;
  font-weight: bold;
  background-color: var(--Orange500);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  --a: initial;
  width: 15%;
  height: 41px;

  ${media.mobile`
  font-size: var(--font-size-small)
  `}


  &:after {
    content: "";
    position: absolute;
    top: var(--top);
    left: var(--left);
    width: var(--diameter);
    height: var(--diameter);
    transform: scale(0);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    pointer-events: none;
    animation: var(--a);
  }

  @keyframes ripple-effect {
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

 
`;

const SearchButton = ({ isFetching, fetchHandler }: ButtonProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const { x, y, width, height } = target.getBoundingClientRect();
    const radius = Math.sqrt(width * width + height * height);
    target.style.setProperty("--diameter", radius * 2 + "px");
    const { clientX, clientY } = e;
    const left = ((clientX - x - radius) / width) * 100 + "%";
    const top = ((clientY - y - radius) / height) * 100 + "%";

    target.style.setProperty("--left", left);
    target.style.setProperty("--top", top);
    target.style.setProperty("--a", "");
    setTimeout(() => {
      target.style.setProperty("--a", "ripple-effect 500ms linear");
    }, 5);
  };

  return (
    <StyledButton
      disabled={isFetching}
      onClick={(e) => {
        onClick(e);
        fetchHandler();
      }}
    >
      {isFetching ? "검색 중.." : "상품조회"}
    </StyledButton>
  );
};

export default SearchButton;
