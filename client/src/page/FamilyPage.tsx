import React from "react";
import { styled } from "styled-components";
import FamilyProfile from "../component/familyProfile/FamilyProfile";
const FamilyPage = () => {
  return (
    <>
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
