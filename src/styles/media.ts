import { css } from "styled-components";

type sizesType = {
  [index: string]: number
}

const sizes: sizesType = {
  mobile: 375,
  tablet: 1024,
};

interface Media {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (literals: TemplateStringsArray, ...placeholders: any[]) => ReturnType<typeof css>;
}

const media = Object.keys(sizes).reduce<Media>((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;