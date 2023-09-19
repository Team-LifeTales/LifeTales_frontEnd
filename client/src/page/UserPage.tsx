import React from "react";
import LeftBar from "../component/leftBar/LeftBar";
import UserProfile from "../component/userProfile/UserProfile";
import { styled } from "styled-components";
const UserPage = () => {
  return (
    <>
      <LeftBar />
      <UserBox>
        <UserProfile></UserProfile>
      </UserBox>
    </>
  );
};
const UserBox = styled.div`
  margin-left: 15rem;
  display: grid;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;
export default UserPage;
