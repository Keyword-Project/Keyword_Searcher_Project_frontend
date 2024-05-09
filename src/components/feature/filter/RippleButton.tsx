import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 5rem;
  border-radius: 9px;
  font-size: 1.5rem;
  color: #eaeaea;
  font-weight: bold;
  background-color: #ff2e63;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  --a: initial;

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

const RippleButton = () => {
  const onClick = (e) => {
    const { x, y, width, height } = e.target.getBoundingClientRect();
    const radius = Math.sqrt(width * width + height * height);
    e.target.style.setProperty("--diameter", radius * 2 + "px");
    const { clientX, clientY } = e;
    const left = ((clientX - x - radius) / width) * 100 + "%";
    const top = ((clientY - y - radius) / height) * 100 + "%";

    e.target.style.setProperty("--left", left);
    e.target.style.setProperty("--top", top);
    e.target.style.setProperty("--a", "");
    setTimeout(() => {
      e.target.style.setProperty("--a", "ripple-effect 500ms linear");
    }, 5);
  };

  return <StyledButton onClick={onClick}>CLICK</StyledButton>;
};

export default RippleButton;
