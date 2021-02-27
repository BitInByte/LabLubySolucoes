import axios, { AxiosError, AxiosResponse } from "axios";

export type reposAttributes = {
  name: string;
  description: string;
  stargazers_count: number;
  url: string;
}[];

class Repo {
  public static async getReposByUrl(url: string) {
    let response: AxiosResponse<reposAttributes>;
    try {
      response = await axios.get(url);
      const repos = response.data.map((repo) => {
        return {
          name: repo.name,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          url: repo.url,
        };
      });
      return repos;
    } catch (err) {
      const error = err as AxiosError;
      console.log("Error: ", error);
      return null;
    }
  }
}

export default Repo;
