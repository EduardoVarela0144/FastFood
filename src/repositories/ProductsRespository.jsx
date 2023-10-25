import api, { productUrl } from "../services/api";

class ProductsRepository {
  async getProducts() {
    const response = await api.get(`${productUrl}`);
    return response.data;
  }
}

export default new ProductsRepository();
