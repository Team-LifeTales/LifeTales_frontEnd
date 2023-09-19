import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  compareEmail,
  deleteEmailCotnet,
} from "../../features/signupSlice/signupSlice";
import { TitleInput } from "../upload/Create";

interface Props {
  modalIsOpen: boolean;
  offModal: () => void;
}
const SignUpEmailModal = (props: Props) => {
  const dispatch = useAppDispatch();
  const correctCode = useAppSelector((state) => state.signup.first.email.code);
  const loading = useAppSelector((state) => state.signup.first.email.loading);
  const confirmed = useAppSelector(
    (state) => state.signup.first.email.confirmed
  );
  const [code, setCode] = useState("");
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => [
    setCode(e.target.value),
  ];
  useEffect(() => {
    if (confirmed) {
      props.offModal();
    }
  }, [correctCode, loading, confirmed, props]);
  return (
    <Modal
      isOpen={props.modalIsOpen}
      style={customStyles}
      ariaHideApp={false}
      onRequestClose={props.offModal}
      shouldCloseOnOverlayClick={false}
    >
      <ModalBox>
        <Status>{loading ? "코드 전송중" : "코드전송완료"}</Status>

        <ModalInput
          value={code}
          onChange={(e) => handleCode(e)}
          placeholder="코드를 입력해주세요"
        ></ModalInput>

        <ButtonBox>
          <ModalButton
            onClick={() => {
              dispatch(compareEmail(code));
            }}
          >
            코드 확인
          </ModalButton>
          <ModalButton
            onClick={() => {
              dispatch(deleteEmailCotnet());
              props.offModal();
            }}
          >
            취소하기
          </ModalButton>
        </ButtonBox>
      </ModalBox>
    </Modal>
  );
};
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
    width: "30rem",
    height: "40rem",
    backgroundColor: `var(--postDetailbackground-color)`,
    padding: "0",
  },
};
const Status = styled.div`
  height: 5rem;
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ModalButton = styled.button`
  width: 5rem;
  height: 2rem;
  margin: 1rem;
`;
const ModalInput = styled(TitleInput)`
  width: 16rem;
  height: 2.5rem;
  font-size: 1rem;
`;
const ButtonBox = styled.div`
  display: flex;
  margin-top: 10rem;
`;

export default SignUpEmailModal;
