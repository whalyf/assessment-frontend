import { Trash } from "lucide-react";
import { TColors, TGender, TProduct } from "../../../types/types";
import {
  ColorButton,
  ColorSection,
  GenderSection,
  WrapperFiltersLeft,
} from "./styles";

export const FiltersLeft = ({
  products,
  handleFilter,
}: {
  products: TProduct;
  handleFilter: ({
    filterType,
    filterSelected,
    reload,
  }: {
    filterType?: "color" | "gender";
    filterSelected?: TColors | TGender;
    reload?: boolean;
  }) => void;
}) => {
  const colorsArray =
    Object.keys(products.filters[0])[0] === "color" &&
    Array.from(
      new Set(
        products.items.reduce((acc, item) => {
          const color = item.filter[0]?.color;
          if (color) {
            acc.push(color as TColors);
          }
          return acc;
        }, [] as TColors[])
      )
    );

  const gendersArray =
    Object.keys(products.filters[0])[0] === "gender" &&
    Array.from(
      new Set(
        products.items.reduce((acc, item) => {
          const gender = item.filter[0]?.gender;
          if (gender) {
            acc.push(gender as TGender);
          }
          return acc;
        }, [] as TGender[])
      )
    );

  return (
    <WrapperFiltersLeft>
      <h3>
        FILTRE POR{" "}
        <button onClick={() => handleFilter({ reload: true })}>
          <Trash color="#cb0d1f" />
        </button>
      </h3>

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
          <ColorSection>
            <h4>CORES</h4>
            <div>
              {!!colorsArray &&
                colorsArray.length > 0 &&
                colorsArray.map((eachColor) => (
                  <ColorButton
                    key={eachColor}
                    $color={eachColor}
                    onClick={() =>
                      handleFilter({
                        filterType: "color",
                        filterSelected: eachColor,
                      })
                    }
                  />
                ))}
            </div>
          </ColorSection>
        )}

      {Object.keys(products.filters[0]).length > 0 &&
        Object.keys(products.filters[0])[0] === "gender" && (
          <GenderSection>
            <h4>GÊNERO</h4>
            <ul>
              {!!gendersArray &&
                gendersArray.length > 0 &&
                gendersArray.map((gender) => (
                  <li>
                    <button
                      onClick={() =>
                        handleFilter({
                          filterType: "gender",
                          filterSelected: gender,
                        })
                      }
                    >
                      {gender}
                    </button>
                  </li>
                ))}
            </ul>
          </GenderSection>
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
