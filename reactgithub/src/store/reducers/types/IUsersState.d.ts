interface IUsersState {
  login: string | null;
  error: string | null;
  loading: boolean;
  data: import("../../../models/User").User;
}
