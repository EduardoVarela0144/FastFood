import { useMutation } from "react-query";
import UsersRepository from "../../repositories/UsersRepository";

function useAddUser() {
  const postAddUserMutation = useMutation(UsersRepository.addUser);

  const addUser = async (user) => {
    try {
      await postAddUserMutation.mutateAsync(user);
      alert("El usuario se guardó con éxito");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Ocurrió un error al guardar el usuario");
      }
    }
  };

  return {
    addUser,
    isLoading: postAddUserMutation.isLoading,
  };
}

export { useAddUser };
