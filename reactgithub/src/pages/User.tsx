// Import libraries
import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import components
import User from "../components/User";
import Spinner from "../components/UI/Spinner";

import actionTypes from "../store/actions/actionTypes";
import { getUserByUsername } from "../store/actions/userActions";
import { addLocalStorageUserInformation } from "../utils/localStorage";
// Styles

// Interface
interface IProps {}

// Component
const UserPage: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { username } = useParams<{ username: string }>();
  console.log("Username: ", username);

  useEffect(() => {
    const checkLoggedUser = async () => {
      if (username)
        await dispatch(getUserByUsername({ username, isLogin: false }));
    };
    checkLoggedUser();
  }, [username]);

  const user: IUsersState = useSelector((state: IStore) => state.user);

  const onUserSigninHandler = () => {
    console.log("Sign me in!");
    if (user && user.data) {
      addLocalStorageUserInformation(user.data.login!);
    }
    history.push("/");
  };

  const onGoBackActionHandler = () => {
    history.push("/");
  };

  let element;
  if (user && user.loading) {
    element = <Spinner withWrapper />;
  } else if (user && user.data) {
    element = (
      <User
        isHome={false}
        name={user.data.name!}
        bio={user.data.bio!}
        followers={user.data.followers!}
        following={user.data.following!}
        repos={user.data.public_repos!}
        email={user.data.email!}
        location={user.data.location!}
        avatarUrl={user.data.avatar_url!}
        login={user.data.login!}
        onActionHandler={onUserSigninHandler}
        onGoBackActionHandler={onGoBackActionHandler}
      />
    );
  } else {
    element = <Spinner withWrapper />;
  }

  return element;
};

export default UserPage;
