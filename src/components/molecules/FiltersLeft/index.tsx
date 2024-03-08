import { WrapperFiltersLeft } from "./styles";

export const FiltersLeft = () => {
  return (
    <WrapperFiltersLeft>
      <h3>FILTRE POR</h3>

      <div>
        <h4>CATEGORIAS</h4>
        <ul>
          <li>Roupas</li>
          <li>Sapatos</li>
          <li>Acessórios</li>
        </ul>
      </div>

      <div>
        <h4>CORES</h4>
        <div></div>
        <div></div>
        <div></div>
      </div>

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
