import styled, { css } from "styled-components";

interface IWrapperProductCard {
  $promo: number;
  $layoutStyle: "list" | "grid";
}

export const WrapperProductCard = styled.div<IWrapperProductCard>`
  ${(props) =>
    props.$layoutStyle === "grid"
      ? css`
          display: flex;
          flex-direction: column;
          width: 13.5rem;
          align-items: center;
          text-align: center;
        `
      : css`
          display: flex;
          align-items: center;
          flex-direction: row;
          width: 100%;
        `}

  > img {
    border: 1px solid #e2dedc;
    width: 13.5rem;
    height: 14.5rem;
    ${(props) =>
      props.$layoutStyle === "list" &&
      css`
        margin-right: 20px;
      `}
  }

  .product-name {
    text-transform: uppercase;
    font-size: 1rem;
    color: #626262;
    width: 13.75rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > div {
    display: flex;
    color: #1e2b50;
    font-weight: bolder;
    font-size: 1.5rem;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;

    .product-price {
      ${(props) =>
        !!props.$promo &&
        css`
          font-weight: normal;
          font-size: 1rem;
          color: #808185;
          text-decoration: line-through;
        `}
    }

    ${(props) =>
      props.$layoutStyle === "list" &&
      css`
        width: 25%;
      `}
  }

  > button {
    width: 100%;
    height: 2.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    border: none;
    background-color: #00a8a9;
    &:hover {
      cursor: pointer;
      background-color: #00d8a9;
    }

    ${(props) =>
      props.$layoutStyle === "list" &&
      css`
        width: 25%;
      `}
  }
`;
