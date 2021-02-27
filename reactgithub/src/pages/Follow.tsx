// Import libraries
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, Link } from "react-router-dom";
import { getFollowsByUrl } from "../store/actions/followersActions";

// Import components
import HeaderPage from "../components/HeaderPage";
import RowElement from "../components/FollowRow";
import Spinner from "../components/UI/Spinner";
import actionTypes from "../store/actions/actionTypes";

// Styles
const FollowContent = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const LinkElement = styled(Link)`
  display: block;
  &:not(:last-child) {
    border-bottom: solid 0.05rem ${(props) => props.theme.colors.rowBorder};
  }
`;

// Interface
interface IProps {}

// Component
const Follow: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const user: IUsersState = useSelector((state: IStore) => state.user);
  const follow: IFollowState = useSelector((state: IStore) => state.follow);

  console.log("Follow: ", follow);
  console.log("URL: ", location.pathname === "/follower");
  const currentUrl = location.pathname;

  useEffect(() => {
    const fetchData = async () => {
      if (currentUrl === "/followers") {
        console.log("Followers URL: ", user.data?.followers_url);

        dispatch(getFollowsByUrl(user!.data!.followers_url!));
      } else {
        console.log("Following URL: ", user.data?.following_url);

        dispatch(getFollowsByUrl(user!.data!.following_url!.split("{")[0]));
      }
    };
    fetchData();
  }, [currentUrl]);

  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.FOLLOW_RESET });
    };
  }, [currentUrl]);

  const onGoBackActionHandler = () => {
    history.push("/");
  };

  let elements;
  if (follow && follow.data) {
    elements = (
      <>
        <HeaderPage
          title={`${follow!.data!.length} ${
            currentUrl === "/followers" ? " seguidores" : "seguindo"
          }`}
          isUser={false}
          isHome={false}
          onGoBackActionHandler={onGoBackActionHandler}
        />
        <FollowContent>
          <ul>
            {follow!.data!.map((follow) => (
              <LinkElement to={`/user/${follow.login}`} key={follow.login}>
                <RowElement
                  key={follow.login}
                  avatarUrl={follow.avatar_url}
                  username={follow.login}
                />
              </LinkElement>
            ))}
          </ul>
        </FollowContent>
      </>
    );
  } else {
    elements = <Spinner withWrapper />;
  }

  return elements;
};

export default Follow;
