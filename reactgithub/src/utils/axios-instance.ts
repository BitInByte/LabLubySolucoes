import axios from "axios";

const instance = (username: string) =>
  axios.create({
    baseURL: `https://api.github.com/users/${username}`,
  });

export default instance;
