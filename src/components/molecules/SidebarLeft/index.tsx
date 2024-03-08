import { Link } from "react-router-dom";
import { WrapperSidebarLeft } from "./styles";

export const SidebarLeft = () => {
  return (
    <WrapperSidebarLeft>
      <ul>
        <li>
          <Link to="/">
            <span>Página Inicial</span>
          </Link>
        </li>
        <li>
          <Link to="/produtos/camisetas">
            <span>Camisetas</span>
          </Link>
        </li>
        <li>
          <Link to="/produtos/calcas">
            <span>Calças</span>
          </Link>
        </li>
        <li>
          <Link to="/produtos/calcados">
            <span>Calçados</span>
          </Link>
        </li>
      </ul>
    </WrapperSidebarLeft>
  );
};
