import React from "react";
import LeftBar from "../component/leftBar/LeftBar";
import { styled } from "styled-components";
import Chat from "../component/chatRoom/Chat";
const ChatRoomPage = () => {
  return (
    <>
      <LeftBar />
      <ChatRoomBox>
        <Chat></Chat>
      </ChatRoomBox>
    </>
  );
};

const ChatRoomBox = styled.div`
  margin-left: 15rem;
  display: grid;
  justify-content: center;
  padding-top: 2rem;
  @media screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;
export default ChatRoomPage;
