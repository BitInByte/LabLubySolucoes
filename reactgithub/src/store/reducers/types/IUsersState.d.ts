interface IUsersState {
  login: string | null;
  error: string | null;
  loading: boolean;
  data: undefined | import("../../../models/User").getUserByUsernameBodyPromise;
}
