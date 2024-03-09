import axios from "axios";
import { TColors, TGender, TProduct } from "../types/types";

const apiUrl = "http://localhost:8888/api/V1/categories";
interface Routes {
  [key: string]: number;
}
export async function handleLoadProducts(location: string) {
  const routes: Routes = {
    "produtos/camisetas": 1,
    "produtos/calcas": 2,
    "produtos/calcados": 3,
  };
  const currentRoute = Object.keys(routes).find((route) =>
    location.includes(route)
  );

  if (!currentRoute) {
    console.error("Route not found");
    return;
  }

  const routeId = routes[currentRoute];

  try {
    const response = await axios.get(`${apiUrl}/${routeId}`);

    return response.data;
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

export async function handleFilter({
  filterType,
  filterSelected,
  reload = false,
  location,
  products,
}: {
  filterType?: "color" | "gender" | "order";
  filterSelected?: TColors | TGender | "expensive" | "cheaper";
  reload?: boolean;
  location: string;
  products: TProduct;
}) {
  if (reload) {
    handleLoadProducts(location);
  }

  if (!filterType || !filterSelected) return;

  if (filterType !== "order") {
    const filteredArrayOfProducts = products?.items.filter((product) => {
      if (product.filter[0][filterType] === filterSelected) {
        return product;
      }
    });

    return {
      filters: products?.filters,
      items: filteredArrayOfProducts,
    } as TProduct;
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
    return {
      ...products,
      items: ordered,
    };
  }
}
