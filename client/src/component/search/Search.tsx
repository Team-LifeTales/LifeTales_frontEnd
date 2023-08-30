import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { TitleInput } from "../upload/Create";
import PostGrid from "../post/PostGrid";
const Search = () => {
  const [searchContent, setSearchContent] = useState<string>("");
  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  };
  useEffect(() => {
    console.log(searchContent);
  }, [searchContent]);
  return (
    <>
      <SearchInputBox>
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
      </SearchInputBox>
      <PostGrid></PostGrid>
    </>
  );
};
export const SearchInputBox = styled.div`
  position: relative;
  display: inline-block;
  margin: 4rem;
`;
export const SearchInput = styled(TitleInput)`
  width: 70vw;
  padding-left: 5rem;
  padding-right: 5rem;
`;
export const SearchIcon = styled.img`
  position: absolute;
  width: 2.8rem;
  height: 2.8rem;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;
export const XIcon = styled.img`
  position: absolute;
  width: 2.8rem;
  height: 2.8rem;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
`;
export default Search;
