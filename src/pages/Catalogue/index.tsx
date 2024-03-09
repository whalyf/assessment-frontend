import axios from "axios";
import { LayoutGrid, List } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// COMPONENTS
import { FiltersLeft } from "../../components/molecules/FiltersLeft";
import { Products } from "../../components/molecules/Products";

// TYPES
import { TColors, TGender, TProduct } from "../../types/types";

// STYLES
import { Footer } from "../../components/atoms/Footer";
import { ProductsHeader, ProductsSection, WrapperCatalogue } from "./styles";

export const Catalogue = () => {
  const apiUrl = "http://localhost:8888/api/V1/categories";
  const location = useLocation();
  const [products, setProducts] = useState<TProduct | null>(null);
  interface Routes {
    [key: string]: number;
  }

  const handleLoadProducts = useCallback(async () => {
    const routes: Routes = {
      "produtos/camisetas": 1,
      "produtos/calcas": 2,
      "produtos/calcados": 3,
    };
    const currentRoute = Object.keys(routes).find((route) =>
      location.pathname.includes(route)
    );

    if (!currentRoute) {
      console.error("Route not found");
      return;
    }

    const routeId = routes[currentRoute];

    try {
      const response = await axios.get(`${apiUrl}/${routeId}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  }, [location]);

  const handleFilter = useCallback(
    ({
      filterType,
      filterSelected,
      reload = false,
    }: {
      filterType?: "color" | "gender" | "order";
      filterSelected?: TColors | TGender | "expensive" | "cheaper";
      reload?: boolean;
    }) => {
      if (reload) {
        handleLoadProducts();
      }

      if (!filterType || !filterSelected) return;

      if (filterType !== "order") {
        const filteredArrayOfProducts = products?.items.filter((product) => {
          if (product.filter[0][filterType] === filterSelected) {
            return product;
          }
        });

        setProducts({
          filters: products?.filters,
          items: filteredArrayOfProducts,
        } as TProduct);
      } else {
        if (!products) return;
        const ordered = products.items.sort((a, b) => {
          const priceA = a.specialPrice || a.price;
          const priceB = b.specialPrice || b.price;

          if (filterSelected === "cheaper") {
            return priceA - priceB;
          } else if (filterSelected === "expensive") {
            return priceB - priceA;
          } else {
            return a.sku.localeCompare(b.sku);
          }
        });

        setProducts({
          ...products,
          items: ordered,
        });
      }
    },
    [products, handleLoadProducts]
  );

  useEffect(() => {
    handleLoadProducts();
  }, [handleLoadProducts]);

  return (
    <>
      <WrapperCatalogue>
        {products?.filters && products?.filters.length > 0 && (
          <FiltersLeft products={products} handleFilter={handleFilter} />
        )}
        <ProductsSection>
          <ProductsHeader>
            <span>{location.pathname.split("/produtos/")}</span>
            <hr />
            <div>
              <div className="icons-left">
                <button>
                  <LayoutGrid size={25} color="#00A8A9" />
                </button>
                <button>
                  <List size={25} color="#00A8A9" />
                </button>
              </div>
              <div className="order-right">
                <span>ORDENAR POR</span>
                <select
                  name="order"
                  id="select-order"
                  onChange={(e) =>
                    handleFilter({
                      filterType: "order",
                      filterSelected: e.target.value as "cheaper" | "expensive",
                    })
                  }
                >
                  <option value="relevance">RELEVÂNCIA</option>
                  <option value="expensive">MAIOR PREÇO</option>
                  <option value="cheaper">MENOR PREÇO</option>
                </select>
              </div>
            </div>
          </ProductsHeader>
          {products?.items && products?.items.length > 0 && (
            <Products products={products} />
          )}
        </ProductsSection>
      </WrapperCatalogue>
      <Footer />
    </>
  );
};
