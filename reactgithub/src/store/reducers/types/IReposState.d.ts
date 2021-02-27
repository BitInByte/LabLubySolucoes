interface IReposState {
  loading: boolean;
  error: string | null;
  data: import("../../../models/Repos").reposAttributes | null;
}
