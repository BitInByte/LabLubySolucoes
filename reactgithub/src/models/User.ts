import axios, { AxiosError, AxiosResponse } from "axios";
//import axios from "../utils/axios-instance";

export type userAttributes = {
  login: string;
  name?: string;
  email?: string;
  location?: string;
  company?: string;
  bio?: string;
  avatar_url?: string;
  followers_url?: string;
  following_url?: string;
  organizations_url?: string;
  starred_url?: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  repos_url?: string;
};

class User {
  private login: string;
  private name?: string;
  private email?: string;
  private location?: string;
  private company?: string;
  private bio?: string;
  private avatar_url?: string;
  private followers_url?: string;
  private following_url?: string;
  private organizations_url?: string;
  private starred_url?: string;
  private public_repos?: number;
  private public_gists?: number;
  private followers?: number;
  private following?: number;
  private repos_url?: string;

  constructor(username: string) {
    console.log("Username: ", username);
    this.login = username;
  }

  public async getUserByUsername() {
    let response: AxiosResponse<userAttributes>;
    console.log("Login 2: ", this.login);

    try {
      console.log("Login: ", this.login);

      response = await axios.get(`https://api.github.com/users/${this.login}`);
      console.log("Response: ", response.data);
      this.name = response.data.name;
      this.email = response.data.email;
      this.location = response.data.location;
      this.company = response.data.company;
      this.bio = response.data.bio;
      this.avatar_url = response.data.avatar_url;
      this.followers_url = response.data.followers_url;
      this.following_url = response.data.following_url;
      this.organizations_url = response.data.organizations_url;
      this.starred_url = response.data.starred_url;
      this.public_gists = response.data.public_gists;
      this.public_repos = response.data.public_repos;
      this.followers = response.data.followers;
      this.following = response.data.following;
      this.repos_url = response.data.repos_url;
      return true;
    } catch (error) {
      const err = error as AxiosError;
      console.log("User Error: ", err.message);
      return false;
    }
  }

  public getData(): userAttributes {
    return {
      login: this.login,
      name: this.name,
      email: this.email,
      location: this.location,
      company: this.company,
      bio: this.bio,
      avatar_url: this.avatar_url,
      following_url: this.following_url,
      followers_url: this.followers_url,
      organizations_url: this.organizations_url,
      starred_url: this.starred_url,
      public_gists: this.public_gists,
      public_repos: this.public_repos,
      followers: this.followers,
      following: this.following,
      repos_url: this.repos_url,
    };
  }

  public static checkUserLoggedIn() {
    return localStorage.getItem("username");
  }
}

export default User;
