import React, { useState } from "react";
import { styled } from "styled-components";

import SignUp from "../component/signUp/SignUp";
import SignUpSecond from "../component/signUp/SignUpSecond";
import SignUpThird from "../component/signUp/SignUpThird";
const SignUpPage = () => {
  const [step, setStep] = useState(0);
  const handleStep = () => {
    setStep(step + 1);
  };
  return (
    <Page>
      <SignUpPageBox>
        {step === 0 && <SignUp handleStep={handleStep} />}
        {step === 1 && <SignUpSecond handleStep={handleStep} />}
        {step === 2 && <SignUpThird />}
      </SignUpPageBox>
    </Page>
  );
};
const Page = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const SignUpPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-color);
  align-items: start;
`;
export default SignUpPage;
