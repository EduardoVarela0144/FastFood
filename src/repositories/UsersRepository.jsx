import api, { userUrl } from "../services/api";

class UsersRepository {
    async login(user) {
        const response = await api.post(`${userUrl}/login`, user);
        return response.data;
      }

      async signUp(user) {
        const response = await api.post(`${userUrl}`, user);
        return response.data;
      }
}

export default new UsersRepository();
