import { styled } from "styled-components";
import { useState, useEffect } from "react";
import PostDetail from "./PostDetail";
import { useAppSelector } from "../../app/hooks";
const Post = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const status = useAppSelector((state) => state.userProfile.status);
  useEffect(() => {}, [status]);
  const offModal = () => {
    setIsOpen(false);
  };
  const onModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <PostBox>
        <PostImage src="/img/AI.png" onClick={onModal} width="100%"></PostImage>
        {status === "edit" ? <DeleteButton>삭제</DeleteButton> : <></>}
      </PostBox>
      <PostDetail modalIsOpen={modalIsOpen} offModal={offModal}></PostDetail>
    </>
  );
};
const PostBox = styled.div`
  position: relative;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  position: absolute;
  width: 3rem;
  height: 2rem;
  top: 0%;
  right: 1rem;
  transform: translateY(-50%);
`;
export default Post;
