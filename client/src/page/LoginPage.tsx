import React from "react";
import Login from "../component/login/Login";
import { styled } from "styled-components";
const LoginPage = () => {
  return (
    <PageBox>
      <ContentBox></ContentBox>
      <Login></Login>
    </PageBox>
  );
};
export const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-color);
`;
const ContentBox = styled.div`
  width: 40vw;
  height: 90vh;
  border: 1px dotted;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export default LoginPage;
