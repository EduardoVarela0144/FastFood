import { useQuery } from "react-query";
import ProductsRespository from "../../repositories/ProductsRespository";
function useGetProducts(filter) {
  return useQuery(["useGetProducts"], () => ProductsRespository.getProducts(filter)
  );
}
export { useGetProducts };