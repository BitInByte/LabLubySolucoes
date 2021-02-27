import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./pages/Login";
import Spinner from "./components/UI/Spinner";

import User from "./models/User";

import { getUserByUsername } from "./store/actions/userActions";

const Layout = React.lazy(() => import("./hoc/Layout"));
const Home = React.lazy(() => import("./pages/Home"));
const Follow = React.lazy(() => import("./pages/Follow"));
const Repos = React.lazy(() => import("./pages/Repos"));

const AppWrapper = styled.div`
  max-width: 100rem;
  //background-color: white;
  margin: 0 auto;
  height: 100%;
`;

const SpinnerWrapper = styled.div`
  width: 100%
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedUser = async () => {
      const username = User.checkUserLoggedIn();
      console.log("Username: ", username);
      if (username) await dispatch(getUserByUsername({ username }));
    };

    checkLoggedUser();
  }, []);

  const user: IUsersState = useSelector((state: IStore) => state.user);

  let routes = null;

  if (user && user.data && user.data.login) {
    console.log("I have username!");
    routes = (
      <Layout>
        <Switch>
          <Route path="/follower" component={Follow} />
          <Route path="/following" component={Follow} />
          <Route path="/repos" component={Repos} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    );
  } else {
    console.log("I dont have username");
    routes = (
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    );
  }

  return (
    <AppWrapper>
      <Suspense
        fallback={
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        }
      >
        {routes}
      </Suspense>
    </AppWrapper>
  );
};

export default App;
