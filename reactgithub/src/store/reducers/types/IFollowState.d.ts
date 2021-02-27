// State type for Follow
interface IFollowState {
  loading: boolean;
  error: string | null;
  data: import("../../../models/Follow").followAttributes | null;
}
