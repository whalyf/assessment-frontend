import { TProduct } from "../../../types/types";
import { WrapperFiltersLeft } from "./styles";

export const FiltersLeft = ({ products }: { products: TProduct }) => {
  console.log(Object.keys(products.filters[0]).length);
  return (
    <WrapperFiltersLeft>
      <h3>FILTRE POR</h3>

      <div>
        <h4>CATEGORIAS</h4>
        <ul>
          <li>Roupas</li>
          <li>Calçados</li>
          <li>Acessórios</li>
        </ul>
      </div>

      {Object.keys(products.filters[0]).length > 0 &&
        Object.keys(products.filters[0])[0] === "color" && (
          <div>
            <h4>CORES</h4>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

      {Object.keys(products.filters[0]).length > 0 &&
        Object.keys(products.filters[0])[0] === "gender" && (
          <div>
            <h4>GÊNERO</h4>
            <ul>
              <li>Masculino</li>
              <li>Feminino</li>
            </ul>
          </div>
        )}

      <div>
        <h4>TIPO</h4>
        <ul>
          <li>Corrida</li>
          <li>Caminhada</li>
          <li>Casual</li>
          <li>Social</li>
        </ul>
      </div>
    </WrapperFiltersLeft>
  );
};
