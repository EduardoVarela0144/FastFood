import axios from "axios";
import { API_URL } from "../config";

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Origin": "*",
};

export const headersFiles = {
  "Content-Type": "multipart/form-data",
  Accept: "multipart/form-data",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Origin": "*",
};

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers,
});


export const axiosInstanceFile = axios.create({
  baseURL: API_URL,
  headers: headersFiles
});

export const userUrl = "/api/users";
export const productUrl = "/api/products";
export const cartUrl = "/api/carts";
export const imagesUrl = "/api/images";



export default axiosInstance;
