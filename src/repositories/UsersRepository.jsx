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

      async geAllUsers() {
        const response = await api.get(`${userUrl}`);
        return response.data;
      }


      async addUser(user) {
        const response = await api.post(`${userUrl}`, user);
        return response.data;
      }

      async editUser(id) {
        const response = await api.put(`${userUrl}/${id}`);
        return response.data;
      }


      async deleteUser(id) {
        const response = await api.delete(`${userUrl}/${id}`);
        return response.data;
      }

      async getUser(id) {
        const response = await api.get(`${userUrl}/${id}`);
        return response.data;
      }




     

}

export default new UsersRepository();
