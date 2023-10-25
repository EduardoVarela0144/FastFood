import { useMutation } from "react-query";
import { useContext } from "react";
import UsersRepository from "../../repositories/UsersRepository";
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useLogin() {
  const postLoginMutation = useMutation(UsersRepository.login);
  const { setAuth } = useContext(AuthContext);

  const postLogin = async (user) => {
    try {
      const response = await postLoginMutation.mutateAsync(user);
      setAuth(response.user);
      AsyncStorage.setItem("@user", JSON.stringify(response.user));
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Ocurrió un error al iniciar sesión");
      }
    }
  };

  return {
    postLogin,
    isLoading: postLoginMutation.isLoading,
  };
}

export { useLogin };
