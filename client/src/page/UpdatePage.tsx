import React from "react";
import { styled } from "styled-components";
import LeftBar from "../component/leftBar/LeftBar";
import Update from "../component/upload/Update";
const UpdatePage = () => {
  return (
    <>
      <LeftBar />
      <UpdateBox>
        <Update />
      </UpdateBox>
    </>
  );
};
const UpdateBox = styled.div`
  margin-left: 15rem;
  display: grid;
  justify-content: center;
  padding-top: 2rem;
  @media screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;
export default UpdatePage;
