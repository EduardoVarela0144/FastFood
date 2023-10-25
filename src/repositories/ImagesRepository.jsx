import { axiosInstanceFile } from "../services/api";
import { imagesUrl
 } from "../services/api";
class ImagesRepository {
  async uploadImage(picture) {
    const response = await axiosInstanceFile.post(`${imagesUrl}`, picture);
    return response.data;
  }
  
}

export default new ImagesRepository();
