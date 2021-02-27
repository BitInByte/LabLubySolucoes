import axios, { AxiosError, AxiosResponse } from "axios";

export type followAttributes = {
  login: string;
  avatar_url: string;
}[];

class Follow {
  public static async getFollowsByUrl(url: string) {
    let response: AxiosResponse<followAttributes>;
    try {
      response = await axios.get(url);
      const follows = response.data.map((e) => {
        return {
          login: e.login,
          avatar_url: e.avatar_url,
        };
      });
      return follows;
    } catch (err) {
      const error = err as AxiosError;
      console.log("Error: ", error);
      return null;
    }
  }
}

export default Follow;
