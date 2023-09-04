import axios from "axios";

export const getImagesList = (limit) =>
  axios.get(`https://picsum.photos/v2/list?page=5&limit=${100}`);
