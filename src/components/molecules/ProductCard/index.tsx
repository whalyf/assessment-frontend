import { WrapperProductCard } from "./styles";

export const ProductCard = ({
  src,
  name,
  price,
  promo = 0,
  sku,
  $layoutStyle,
}: {
  src: string;
  sku: string;
  name: string;
  price: number;
  promo?: number;
  $layoutStyle: "list" | "grid";
}) => {
  return (
    <WrapperProductCard $promo={promo} $layoutStyle={$layoutStyle}>
      <img src={`../${src}`} alt={sku} />
      <span className="product-name">{name}</span>
      <div>
        <span className="product-price">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        {!!promo && (
          <span className="product-promo">
            {promo.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        )}
      </div>
      <button type="button">COMPRAR</button>
    </WrapperProductCard>
  );
};
