// Import libraries
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getFollowsByUrl } from "../store/actions/followersActions";

// Import components
import HeaderPage from "../components/HeaderPage";
import RowElement from "../components/FollowRow";

// Styles
const FollowContent = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

// Interface
interface IProps {}

// Component
const Follow: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user: IUsersState = useSelector((state: IStore) => state.user);
  const follow: IFollowState = useSelector((state: IStore) => state.follow);

  console.log("Follow: ", follow);
  console.log("URL: ", location.pathname);
  const currentUrl = location.pathname;

  useEffect(() => {
    const fetchData = async () => {
      if (currentUrl === "/follower") {
        dispatch(getFollowsByUrl(user!.data!.followers_url!));
      } else {
        dispatch(getFollowsByUrl(user!.data!.following_url!.split("{")[0]));
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HeaderPage title="Title" isUser={false} isHome={false} />
      <FollowContent>
        <ul>
          <RowElement
            avatarUrl="https://avatars.githubusercontent.com/u/28604537?v=4"
            username="tgwow"
          />
          <RowElement
            avatarUrl="https://avatars.githubusercontent.com/u/28604537?v=4"
            username="tgwow"
          />
          <RowElement
            avatarUrl="https://avatars.githubusercontent.com/u/28604537?v=4"
            username="tgwow"
          />
          <RowElement
            avatarUrl="https://avatars.githubusercontent.com/u/28604537?v=4"
            username="tgwow"
          />
        </ul>
      </FollowContent>
    </>
  );
};

export default Follow;
