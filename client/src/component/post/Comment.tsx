import React, { useState } from "react";
import { styled } from "styled-components";

const Comment = () => {
  const [showNested, setShowNested] = useState<boolean>(false);
  const handleshowNested = () => {
    setShowNested((prevShowNested) => !prevShowNested);
  };
  return (
    <>
      <CommentLayout>
        <CommentWithNestedComment>
          <CommentBox>
            <CommentProfile>
              <CommentProfileContent src="/img/AI.png"></CommentProfileContent>
            </CommentProfile>
            <CommentName>홍길동</CommentName>
            <CommentContent>안녕하세요</CommentContent>
          </CommentBox>
          <NestedComment>
            <NestedOption>
              {showNested ? (
                <>
                  <div onClick={handleshowNested}>-답글숨기기</div>
                  <CommentBox>
                    <CommentProfile>
                      <CommentProfileContent src="/img/AI.png"></CommentProfileContent>
                    </CommentProfile>
                    <CommentName>홍길동</CommentName>
                    <CommentContent>안녕하세요</CommentContent>
                  </CommentBox>
                  <CommentBox>
                    <CommentProfile>
                      <CommentProfileContent src="/img/AI.png"></CommentProfileContent>
                    </CommentProfile>
                    <CommentName>홍길동</CommentName>
                    <CommentContent>안녕하세요</CommentContent>
                  </CommentBox>
                  <CommentBox>
                    <CommentProfile>
                      <CommentProfileContent src="/img/AI.png"></CommentProfileContent>
                    </CommentProfile>
                    <CommentName>홍길동</CommentName>
                    <CommentContent>안녕하세요</CommentContent>
                  </CommentBox>
                </>
              ) : (
                <div onClick={handleshowNested}>-답글보기 3개</div>
              )}
            </NestedOption>
          </NestedComment>
        </CommentWithNestedComment>
      </CommentLayout>
      <CommentInput placeholder="댓글을 입력하세요"></CommentInput>
    </>
  );
};
const CommentLayout = styled.div`
  width: 100%;
  height: 30rem;
  overflow: auto;
`;
const CommentBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
`;
const CommentWithNestedComment = styled.div``;
const CommentProfile = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: green;
  border-radius: 70%;
  overflow: hidden;
  margin: 0.5rem;
`;
const CommentProfileContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const NestedComment = styled.div`
  width: 90%;
  margin-left: 10%;
`;
const NestedOption = styled.div`
  cursor: pointer;
`;
const CommentName = styled.div`
  margin-right: 1rem;
`;
const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentInput = styled.textarea`
  font-size: 1rem;
  height: 4rem;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  background-color: var(--postDetailbackground-color);
  padding: 0.5rem;
  border-top: solid 0.1rem #2d9037;
`;
export default Comment;
