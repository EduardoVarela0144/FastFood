import { useQuery } from "react-query";
import ProductsRespository from "../../repositories/ProductsRespository";
function useGetProducts() {
  return useQuery(["useGetUsers"], () => ProductsRespository.getProducts()
  );
}
export { useGetProducts };