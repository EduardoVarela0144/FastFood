import api, { cartUrl } from "../services/api";

class StripeRepository {
    
  async postStripePayment(pay) {
    const response = await api.post(`${cartUrl}/pay`, pay);
    return response.data;
  }

}

export default new StripeRepository();
