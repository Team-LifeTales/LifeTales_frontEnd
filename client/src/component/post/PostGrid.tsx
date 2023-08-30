import React from "react";
import { styled } from "styled-components";
import Post from "./Post";
const PostGrid = () => {
  return (
    <GridBox>
      <PostBox>
        <Post></Post>
      </PostBox>
      <PostBox>
        <Post></Post>
      </PostBox>
      <PostBox>
        <Post></Post>
      </PostBox>
      <PostBox>
        <Post></Post>
      </PostBox>
      <PostBox>
        <Post></Post>
      </PostBox>
    </GridBox>
  );
};
const PostBox = styled.div`
  width: 98%;
  height: 100%;
  margin: 1%;
  border: 0;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 92%;
  margin: 4rem;
`;
export default PostGrid;
