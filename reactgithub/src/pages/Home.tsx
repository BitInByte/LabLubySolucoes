// Import libraries
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import components
import User from "../components/User";

import actionTypes from "../store/actions/actionTypes";

import { getUserByUsername } from "../store/actions/userActions";

import UserModel from "../models/User";

// Styles

// Interface
interface IProps {}

// Component
const Home: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedUser = async () => {
      const username = UserModel.checkUserLoggedIn();
      console.log("Username: ", username);
      if (username)
        await dispatch(getUserByUsername({ username, isLogin: false }));
    };

    checkLoggedUser();
  }, []);

  //useEffect(() => {
  //return () => {
  //dispatch({
  //type: actionTypes.USER_FINISH,
  //});
  //};
  //}, []);

  const user: IUsersState = useSelector((state: IStore) => state.user);

  const userLogout = () => {
    dispatch({
      type: actionTypes.USER_START,
    });
    localStorage.removeItem("username");
    dispatch({
      type: actionTypes.USER_FINISH,
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
