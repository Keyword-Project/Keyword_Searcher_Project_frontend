import { css } from "styled-components";

const sizes = {
  mobile: 375,
  tablet: 1024,
};

 const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
