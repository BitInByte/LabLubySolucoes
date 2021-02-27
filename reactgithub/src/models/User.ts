import axios, { AxiosError, AxiosResponse } from "axios";
//import axios from "../utils/axios-instance";

export type getUserByUsernameBodyPromise = {
  login: string | null;
  name: string | null;
  email: string | null;
  location: string | null;
  company: string | null;
  bio: string | null;
  avatar_url: string | null;
  followers_url: string | null;
  following_url: string | null;
  organizations_url: string | null;
  starred_url: string | null;
  public_repos: number | null;
  public_gists: number | null;
  followers: number | null;
  following: number | null;
};

class User {
  private login: string;
  private name: string | null;
  private email: string | null;
  private location: string | null;
  private company: string | null;
  private bio: string | null;
  private avatar_url: string | null;
  private followers_url: string | null;
  private following_url: string | null;
  private organizations_url: string | null;
  private starred_url: string | null;
  private public_repos: number | null;
  private public_gists: number | null;
  private followers: number | null;
  private following: number | null;

  constructor(username: string) {
    console.log("Username: ", username);
    this.login = username;
    this.name = null;
    this.email = null;
    this.company = null;
    this.bio = null;
    this.avatar_url = null;
    this.followers_url = null;
    this.following_url = null;
    this.organizations_url = null;
    this.starred_url = null;
    this.public_repos = null;
    this.public_gists = null;
    this.followers = null;
    this.following = null;
    this.location = null;
  }

  public async getUserByUsername() {
    let response: AxiosResponse<getUserByUsernameBodyPromise>;
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
      return true;
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      return false;
    }
  }

  public getData(): getUserByUsernameBodyPromise {
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
    };
  }

  public static checkUserLoggedIn() {
    return localStorage.getItem("username");
  }
}

export default User;
