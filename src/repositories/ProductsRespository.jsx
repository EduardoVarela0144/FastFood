import api, { productUrl } from "../services/api";

class ProductsRepository {
  async getProducts(filter) {
    const response = await api.get(`${productUrl}/?name=${filter}`);
    return response.data;
  }
  async postProduct(product) {
    const response = await api.post(`${productUrl}`,product);
    return response.data;
  }
}

export default new ProductsRepository();
