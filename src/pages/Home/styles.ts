import styled from "styled-components";
export const WrapperHome = styled.div`
  display: flex;
  width: 90vw;
  padding: 25px 0;
  gap: 25px;
  /* max-width: 1240px; */
  justify-content: space-between;

  height: calc(100dvh - 245px);
  /* height: calc(100dvh - 245px - 11rem); */
`;

export const RightContent = styled.section`
  width: 100%;
  > main span {
    font-size: 1.625rem;
  }
`;

export const HeroCarrousel = styled.div`
  background-color: #acacac;
  height: 17rem;
`;
