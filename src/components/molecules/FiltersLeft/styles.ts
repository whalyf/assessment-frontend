import styled from "styled-components";

type TColorButton = {
  $color: "Preta" | "Laranja" | "Amarela" | "Rosa" | "Cinza" | "Azul" | "Bege";
};

export const WrapperFiltersLeft = styled.aside`
  width: 240px;
  max-height: 29.5rem;
  height: 100dvh;
  padding: 1rem;
  border: 1px solid #e2dedc;

  > h3 {
    color: #cb0d1f;
    margin: 0;
    align-items: center;
    display: flex;
    justify-content: space-between;

    > button {
      border: none;
      background-color: transparent;
    }
  }

  > div h4 {
    color: #1e2b50;
    margin-bottom: 0;
  }
`;

export const ColorSection = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
  }
`;

const colorsCss = {
  Preta: "black",
  Laranja: "orange",
  Amarela: "yellow",
  Rosa: "pink",
  Cinza: "gray",
  Azul: "blue",
  Bege: "beige",
};

export const ColorButton = styled.button<TColorButton>`
  width: 3rem;
  height: 2rem;
  background-color: ${({ $color }) => colorsCss[$color]};
  border: none;
`;

export const GenderSection = styled.div`
  display: flex;
  flex-direction: column;
  > ul li button {
    border: none;
    background-color: transparent;
    font-size: 1rem;
  }
`;
