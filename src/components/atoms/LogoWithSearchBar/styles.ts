import styled from "styled-components";

export const WrapperLogoWithSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
  height: auto;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    > input {
      height: 2.35rem;
      width: 25.875rem;
    }
    > button {
      height: 2.75rem;
      width: 6.875rem;
      border-radius: 0;
      border: none;
      background-color: #cb0d1f;
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }
`;
