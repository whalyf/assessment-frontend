import { TProduct } from "../../../types/types";
import { ProductCard } from "../ProductCard";
import { WrapperProducts } from "./styles";
export const Products = ({
  products,
  $layoutStyle,
}: {
  products: TProduct;
  $layoutStyle: "list" | "grid";
}) => {
  return (
    <WrapperProducts $layoutStyle={$layoutStyle}>
      {products.items.map((product) => (
        <ProductCard
          src={product.image}
          name={product.name}
          price={product.price}
          promo={product.specialPrice}
          sku={product.sku}
          key={product.sku}
          $layoutStyle={$layoutStyle}
        />
      ))}
    </WrapperProducts>
  );
};
