import { useMutation } from "react-query";
import UsersRepository from "../../repositories/UsersRepository";

function useUpdateUser() {
  const updateUserMutation = useMutation(UsersRepository.editUser);

  const updateUser = async (user) => {
    try {
      await updateUserMutation.mutateAsync(user);
      alert("El usuario se actualizó con éxito");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Ocurrió un error al actualizar el usuario");
      }
    }
  };

  return {
    updateUser,
    isLoading: updateUserMutation.isLoading,
  };
}

export { useUpdateUser };
