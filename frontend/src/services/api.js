import Axios from 'axios';

const api = Axios.create({
  baseURL: "https://calladmin-api.herokuapp.com",
});

export default api;