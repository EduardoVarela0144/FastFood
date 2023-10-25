import api, { userUrl } from "../services";

class RoomsRepository {
    async login(user) {
        const response = await api.post(`${userUrl}/login`, user);
        return response.data;
      }
}