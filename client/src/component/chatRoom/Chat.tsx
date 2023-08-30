import React, { useState } from "react";
import { styled } from "styled-components";

const Chat = () => {
  const [chatInput, setChatInput] = useState<string>("");
  const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };
  return (
    <>
      <ChatShowBox>
        <OtherChatBox>
          <OtherImage>
            <OtherImageContent src="/img/AI.png"></OtherImageContent>
          </OtherImage>
          <OtherChat>
            <OtherName>홍길동</OtherName>
            <OtherContent>23123123123123231231231231232312</OtherContent>
            <OtherDate>5분전</OtherDate>
          </OtherChat>
        </OtherChatBox>

        <MyChatBox>
          <MyChat>
            <MyContent>123123</MyContent>

            <MyDate>지금</MyDate>
          </MyChat>
        </MyChatBox>
      </ChatShowBox>
      <ChatInputBox>
        <ChatInput
          value={chatInput}
          onChange={(e) => {
            handleChat(e);
          }}
        ></ChatInput>
        <InputButton disabled={chatInput ? false : true}>보내기</InputButton>
      </ChatInputBox>
    </>
  );
};
const ChatShowBox = styled.div`
  width: 80vw;

  height: 80vh;
  overflow: scroll;
  overflow-x: hidden;
`;
const OtherChatBox = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
const OtherImage = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: green;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 1rem;
`;
const OtherImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const OtherImageNone = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
`;
const OtherChat = styled.div`
  display: inline-block;
  min-height: 5rem;
  min-width: 20rem;
  word-wrap: break-word; /* 긴 단어 줄 바꿈 */
  max-width: 40rem; /* 최대 너비 */
  background-color: var(--otherChat-color);
  padding: 1rem;
  border-radius: 2rem;
`;
const OtherName = styled.div``;
const OtherContent = styled.div`
  margin: 1rem;
`;
const OtherDate = styled.div`
  text-align: right;
`;
const MyChatBox = styled.div`
  text-align: right;
  margin-right: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
const MyChat = styled.div`
  display: inline-block;
  text-align: left;
  min-height: 5rem;
  min-width: 20rem;
  word-wrap: break-word; /* 긴 단어 줄 바꿈 */
  max-width: 50rem; /* 최대 너비 */
  background-color: var(--myChat-color);
  padding: 1rem;
  border-radius: 2rem;
`;
const MyContent = styled.div``;
const MyDate = styled.div`
  text-align: right;
`;

const ChatInputBox = styled.div`
  margin-top: 1rem;
  position: relative;
  display: inline-block;
`;
const ChatInput = styled.input`
  width: 80vw;
  font-size: 1.5rem;
  background: var(--chatInput-color);
  border: 0.2rem solid;
  height: 10vh;
  padding-right: 7rem;
  &:focus {
    outline: none;
    border: 0.2rem solid var(--green-color);
  }
`;
const InputButton = styled.button`
  width: 5rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;
export default Chat;
