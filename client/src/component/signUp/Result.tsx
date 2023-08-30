import React from "react";
import { styled } from "styled-components";
const Result = () => {
  return (
    <>
      <ResultContent>
        <p>가문1</p>
      </ResultContent>
      <ResultContent>
        <p>가문2</p>
      </ResultContent>
      <ResultContent>
        <p>가문3</p>
      </ResultContent>
    </>
  );
};
const ResultContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: pink;
  border: 1px solid;
  border-radius: 30px;
`;
export default Result;
