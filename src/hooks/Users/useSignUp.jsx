import { useMutation } from "react-query";
import { useContext } from "react";
import UsersRepository from "../../repositories/UsersRepository";
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useSignUp() {
  const postSignUpMutation = useMutation(UsersRepository.signUp);
  const { setAuth } = useContext(AuthContext);

  const postSignUp = async (user) => {
    try {
      const response = await postSignUpMutation.mutateAsync(user);
      setAuth(response);
      AsyncStorage.setItem("@user", JSON.stringify(response));

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
    postSignUp,
    isLoading: postSignUpMutation.isLoading,
  };
}

export { useSignUp };
