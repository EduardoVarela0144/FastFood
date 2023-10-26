import { useQuery } from "react-query";
import UsersRepository from "../../repositories/UsersRepository";
function useGetUserById() {
  return useQuery(["useGetUserById"], (id) => UsersRepository.getUser(id)
  );
}
export { useGetUserById };