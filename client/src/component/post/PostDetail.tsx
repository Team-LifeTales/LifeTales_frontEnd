import { styled } from "styled-components";
import Modal from "react-modal";
import HeartAction from "../heartAction/HeartAction";
import Comment from "./Comment";
interface Props {
  modalIsOpen: boolean;
  offModal: () => void;
}
const PostDetail = (props: Props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      style={customStyles}
      ariaHideApp={false}
      onRequestClose={props.offModal}
      shouldCloseOnOverlayClick={true}
    >
      <div style={{ display: "flex" }}>
        <ModalImage src="img/chat.png"></ModalImage>
        <ModalInfoBox>
          <UserInfo>
            <UserImg>
              <UserImgContent src="/img/AI.png"></UserImgContent>
            </UserImg>
            <UserName>
              <p style={{ fontSize: "1.5rem" }}>UserName</p>
            </UserName>
            <HeartAction></HeartAction>
          </UserInfo>
          <TitleWithDate>
            <Title>오늘 꽃사진</Title>
            <Date>2023-08-10</Date>
          </TitleWithDate>
          <Content>
            안녕하세요 오늘의 꽃사진입니다람쥐 제가 가장 좋아하는 사진을
            공유할게요 다들 좋아요 구독 알람설정까지 부탁드립니다.
          </Content>
          <Comment></Comment>
        </ModalInfoBox>
      </div>
    </Modal>
  );
};

const ModalImage = styled.img`
  width: 60%;
  height: 49.9rem;
  object-fit: fill;
`;
const ModalInfoBox = styled.div`
  width: 40%;
  height: 49.9rem;
`;
const UserInfo = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;
const UserImg = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: green;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 1rem;
`;
const UserImgContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const UserName = styled.div``;
const TitleWithDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 1rem;
`;
const Title = styled.div`
  font-size: 1.5rem;
`;
const Date = styled.div`
  font-size: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
`;
const Content = styled.div`
  text-align: right;
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: solid 0.1rem #2d9037;
  /* overflow-y: auto; */
  /* max-height: 1000px; */
`;
const customStyles = {
  overlay: {
    background: "rgba(125, 125, 125, 0.2)",
    backdropFilter: "blur(5px)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.15)",
    width: "80rem",
    height: "50rem",
    backgroundColor: `var(--postDetailbackground-color)`,
    padding: "0",
  },
};

export default PostDetail;
