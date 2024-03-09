import styled from "styled-components";

export const WrapperCatalogue = styled.div`
  width: 90vw;
  display: flex;
  padding: 25px 0;
  gap: 25px;
  justify-content: space-between;
  height: 100dvh;

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductsSection = styled.section`
  width: 100%;
`;

export const ProductsHeader = styled.div`
  > span {
    font-size: 2rem;
    color: #cb0d1f;
    text-transform: capitalize;
  }

  > hr {
    border: 0;
    border-top: 1px solid #e2dedc;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
    > .order-right {
      display: flex;
      width: 50%;
      gap: 1rem;
      justify-content: flex-end;
      align-items: center;
      font-size: 0.75rem;
      > span {
        color: #808185;
        font-weight: bold;
      }
    }
  }
`;

export const LayoutStyle = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: flex-start;

  > button {
    border: none;
    background-color: transparent;
    align-items: center;
    display: flex;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  }
`;
