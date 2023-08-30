import React, { useState } from "react";
import Switch from "react-switch";
import { styled } from "styled-components";
import NewFamily from "./NewFamily";
import JoinFamily from "./JoinFamily";

const SignUpThird = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    console.log(nextChecked);
  };
  return (
    <>
      <SwitchBox>
        <p>기존가입</p>
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#e3efdb"
          onHandleColor="#2d9037"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        <p>새로만들기</p>
      </SwitchBox>
      <FamilyBox>
        {checked ? <NewFamily></NewFamily> : <JoinFamily></JoinFamily>}
      </FamilyBox>
    </>
  );
};
const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  width: 60vw;
  min-height: 3rem;
`;
const FamilyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 80vh;
  background-color: var(--light-green-color);
  border-radius: 30px;
`;
export default SignUpThird;
