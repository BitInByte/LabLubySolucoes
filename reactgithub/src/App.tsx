import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./pages/Login";
import Spinner from "./components/UI/Spinner";

import User from "./models/User";

import { getUserByUsername } from "./store/actions/userActions";

const Layout = React.lazy(() => import("./hoc/Layout"));
const Home = React.lazy(() => import("./pages/Home"));
const Follow = React.lazy(() => import("./pages/Follow"));
const Repos = React.lazy(() => import("./pages/Repos"));
const UserPage = React.lazy(() => import("./pages/User"));

const AppWrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  height: 100%;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedUser = async () => {
      const username = User.checkUserLoggedIn();
      if (username)
        await dispatch(getUserByUsername({ username, isLogin: false }));
    };

    checkLoggedUser();
  }, []);

  const user: IUsersState = useSelector((state: IStore) => state.user);

  let routes = null;

  if (user && user.data && user.data.login) {
    routes = (
      <Layout>
        <Switch>
          <Route path="/user/:username" component={UserPage} />
          <Route path="/followers" component={Follow} />
          <Route path="/following" component={Follow} />
          <Route path="/repos" component={Repos} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AppWrapper>
      <Suspense fallback={<Spinner withWrapper />}>{routes}</Suspense>
    </AppWrapper>
  );
};

export default App;
