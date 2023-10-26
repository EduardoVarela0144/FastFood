import { useMutation } from "react-query";
import UsersRepository from "../../repositories/UsersRepository";

function useDeleteUser() {
  const deleteUserMutation = useMutation(UsersRepository.deleteUser);

  const deleteUser = async (user) => {
    try {
      await deleteUserMutation.mutateAsync(user);
      alert("El usuario se eliminó con éxito");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Ocurrió un error al eliminar el usuario");
      }
    }
  };

  return {
    deleteUser,
    isLoading: deleteUserMutation.isLoading,
  };
}

export { useDeleteUser };
