import React, { useState } from "react";
import {
  SearchIcon,
  SearchInput,
  SearchInputBox,
  XIcon,
} from "../search/Search";
import { styled } from "styled-components";
import Result from "./Result";
import { TitleInput } from "../upload/Create";

const JoinFamily = () => {
  const [searchContent, setSearchContent] = useState<string>("");
  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  };
  return (
    <>
      <SearchBox>
        <SearchInput
          value={searchContent}
          onChange={(e) => {
            handleContent(e);
          }}
        ></SearchInput>
        <SearchIcon src="/img/search.png" draggable="false"></SearchIcon>
        <XIcon
          onClick={() => {
            setSearchContent("");
          }}
          src="/img/Xmark.png"
          draggable="false"
        ></XIcon>
      </SearchBox>
      {searchContent ? (
        <>
          <ResultBox>
            <Result></Result>
          </ResultBox>
          <p>Q.우리가족이 현재 주거하는곳은?</p>
          <AnswerInput placeholder="답변"></AnswerInput>
          <SubmitButton>완료</SubmitButton>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
const SearchBox = styled(SearchInputBox)`
  width: 60%;
  min-width: 10rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
`;
const ResultBox = styled.div`
  width: 60%;
  height: 25rem;
  background-color: white;
  border-radius: 30px;
  overflow: auto;
`;
const AnswerInput = styled(TitleInput)`
  width: 60%;
  height: 6vh;
  min-height: 3rem;
  min-width: 10rem;
`;
const SubmitButton = styled.button`
  width: 5rem;
  height: 2rem;
`;
export default JoinFamily;
