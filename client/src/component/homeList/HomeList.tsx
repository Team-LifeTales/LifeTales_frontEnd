import { styled } from "styled-components";
import Post from "../post/Post";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const HomeList = () => {
  const [testArray, setTestArray] = useState(["test", "test"]);

  const [ref, inView] = useInView({
    threshold: 1,
    skip: false,
  });
  useEffect(() => {
    if (inView) {
      setTestArray([...testArray, "test"]);
      console.log(testArray);
    }
  }, [inView]);
  return (
    <ImageList>
      <PostBox>
        <Post></Post>
      </PostBox>
      <PostBox>
        <Post></Post>
      </PostBox>
      {testArray?.map((value, index) => {
        return (
          <PostBox key={index}>
            <Post></Post>
          </PostBox>
        );
      })}
      <div style={{ width: "1rem", height: "15rem" }} ref={ref}></div>
    </ImageList>
  );
};
const PostBox = styled.div`
  width: 45rem;
  height: 35rem;
  margin-bottom: 10rem;
  margin-top: 5rem;
`;
const ImageList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  background-color: var(--background-color);
  padding-right: 5rem;
  @media screen and (max-width: 1200px) {
    padding-right: 0;
    margin-left: 20%;
    width: 80%;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    width: 100%;
  }
`;
export default HomeList;
