import React from "react";
import LeftBar from "../component/leftBar/LeftBar";
import { styled } from "styled-components";
import Search from "../component/search/Search";

const SearchPage = () => {
  return (
    <>
      <LeftBar></LeftBar>
      <SearchBox>
        <Search></Search>
      </SearchBox>
    </>
  );
};
const SearchBox = styled.div`
  margin-left: 15rem;
  display: grid;
  justify-content: center;
  padding-top: 2rem;
  @media screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;
export default SearchPage;
