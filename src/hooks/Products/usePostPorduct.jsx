import { useMutation } from "react-query";
import UsersRepository from "../../repositories/UsersRepository";
import ProductsRespository from "../../repositories/ProductsRespository";

function usePostProduct() {
  const postProductMutation = useMutation(ProductsRespository.postProduct);

  const postProduct = async (user) => {
    try {
      await postProductMutation.mutateAsync(user);
      alert("El producto se agregÓ correctamente");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Ocurrió un error al agregar producto");
      }
    }
  };

  return {
    postProduct,
    isLoading: postProductMutation.isLoading,
  };
}

export { usePostProduct };
