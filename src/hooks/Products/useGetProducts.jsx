import { useQuery } from "react-query";
import ProductsRespository from "../../repositories/ProductsRespository";
function useGetProducts() {
  return useQuery(["useGetProducts"], () => ProductsRespository.getProducts()
  );
}
export { useGetProducts };