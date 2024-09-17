import axios from "axios";

export const BlogFetch = axios.create({
  baseURL: "https://jsonplaceholder.org",
});
