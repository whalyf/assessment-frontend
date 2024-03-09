import styled, { css } from "styled-components";

type TWrapperProducts = {
  $layoutStyle: "list" | "grid";
};

export const WrapperProducts = styled.main<TWrapperProducts>`
  overflow: auto;
  max-height: 900px;

  ${(props) =>
    props.$layoutStyle === "grid"
      ? css`
          display: grid;
          grid-template-columns: repeat(auto-fill, 13.5rem);
          width: 100%;
          gap: 2.1875rem;
          justify-content: space-evenly;
        `
      : css`
          display: flex;
          flex-wrap: wrap;
        `}
`;
