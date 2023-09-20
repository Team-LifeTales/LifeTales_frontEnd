import React from "react";
import { styled } from "styled-components";
import Create from "../component/upload/Create";

const CreatePage = () => {
  return (
    <>
      <CreateBox>
        <Create />
      </CreateBox>
    </>
  );
};
const CreateBox = styled.div`
  margin-left: 15rem;
  display: grid;
  justify-content: center;
  padding-top: 2rem;
  @media screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;

export default CreatePage;
