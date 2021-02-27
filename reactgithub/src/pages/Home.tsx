// Import libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Import components
import User from "../components/User";

//import { logout } from "../store/actions/userActions";
import { userTypes } from "../store/actions/actionTypes";

// Styles

// Interface
interface IProps {}

// Component
const Home: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const user: IUsersState = useSelector((state: IStore) => state.user);

  const userLogout = () => {
    dispatch({
      type: userTypes.USER_START,
    });
    localStorage.removeItem("username");
    dispatch({
      type: userTypes.USER_FINISH,
    });
  };

  return (
    <User
      isHome
      name={user!.data!.name!}
      bio={user!.data!.bio!}
      followers={user!.data!.followers!}
      following={user!.data!.following!}
      repos={user!.data!.public_repos!}
      email={user!.data!.email!}
      location={user!.data!.location!}
      avatarUrl={user!.data!.avatar_url!}
      login={user!.data!.login!}
      onActionHandler={userLogout}
    />
  );
};

export default Home;
