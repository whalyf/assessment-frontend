import { Link } from "react-router-dom";
import { WrapperLogoWithSearchBar } from "./styles";

export const LogoWithSearchBar = () => {
  return (
    <WrapperLogoWithSearchBar>
      <Link to="/">
        <img src="../../../logo.png" alt="webJumpLogo" />
      </Link>

      <div>
        <input type="text" />
        <button>Buscar</button>
      </div>
    </WrapperLogoWithSearchBar>
  );
};
