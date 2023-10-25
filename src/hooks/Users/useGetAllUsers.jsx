import { useQuery } from "react-query";
import UsersRepository from "../../repositories/UsersRepository";
function useGetAllUsers() {
  return useQuery(["useGetAllUser"], () => UsersRepository.geAllUsers()
  );
}
export { useGetAllUsers };