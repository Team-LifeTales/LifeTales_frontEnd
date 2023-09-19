import React from "react";
import LeftBar from "../component/leftBar/LeftBar";
import { styled } from "styled-components";
import FamilyProfile from "../component/familyProfile/FamilyProfile";
const FamilyPage = () => {
  return (
    <>
      <LeftBar />
      <FamilyBox>
        <FamilyProfile></FamilyProfile>
      </FamilyBox>
    </>
  );
};
const FamilyBox = styled.div`
  margin-left: 15rem;
  display: grid;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;
export default FamilyPage;
