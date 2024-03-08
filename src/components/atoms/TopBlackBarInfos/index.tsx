import { Link } from "react-router-dom";
import { WrapperTopBlackBarInfos } from "./styles";

export const TopBlackBarInfos = () => {
  return (
    <WrapperTopBlackBarInfos>
      <span>
        <Link to="/login">Acesse sua conta</Link> ou{" "}
        <Link to="/signin">Cadastre-se</Link>
      </span>
    </WrapperTopBlackBarInfos>
  );
};
