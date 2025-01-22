import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

export default ApiClient;