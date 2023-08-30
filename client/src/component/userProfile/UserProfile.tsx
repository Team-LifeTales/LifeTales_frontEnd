import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  edit,
  editDone,
} from "../../features/userProfileSlice/userProfileSlice";
const UserProfile = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.userProfile.status);

  const navigate = useNavigate();

  useEffect(() => {
    // mount 시점, deps update 시점에 실행할 작업 (componentDidMount)
    return () => {
      //unmount 시점, deps update 직전에 실행할 작업 (componentWillUnmount)
      dispatch(editDone());
    };
  }, []);
  useEffect(() => {}, [status]);
  return (
    <>
      <UserProfileBox>
        <ImageWithTitleBox>
          <UserImage>
            <Card>
              <Front></Front>
              <Back></Back>
            </Card>
          </UserImage>
          <UserTitle>김해김씨</UserTitle>
        </ImageWithTitleBox>
        <UserInfoBox>
          {status === "edit" ? (
            <UserNameInput value="홍길동" readOnly />
          ) : (
            <UserName>홍길동</UserName>
          )}

          <UserInfo>게시글 0</UserInfo>
          {status === "edit" ? (
            <UserIntroInput
              value="에습하의 윈터입니다 반가워요 ^^"
              readOnly
            ></UserIntroInput>
          ) : (
            <UserIntro>에습하의 윈터입니다 반가워요 ^^</UserIntro>
          )}
        </UserInfoBox>
        <ButtonBox>
          <CreateButton
            onClick={() => {
              navigate("/Create");
            }}
          >
            글쓰기
          </CreateButton>
          {status === "edit" ? (
            <CreateButton
              onClick={() => {
                dispatch(editDone());
              }}
            >
              적용하기
            </CreateButton>
          ) : (
            <CreateButton
              onClick={() => {
                dispatch(edit());
              }}
            >
              편집하기
            </CreateButton>
          )}
        </ButtonBox>
      </UserProfileBox>
    </>
  );
};
const UserProfileBox = styled.div`
  display: flex;
  margin: 4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
`;
const ImageWithTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  item-align: center;
  text-align: center;
  margin-right: 2rem;
`;
const UserImage = styled.div`
  width: 15rem;
  height: 15rem;
  overflow: hidden;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.7s;
  border-radius: 50%;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;
const CardOption = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  backface-visibility: hidden;
`;
const Front = styled(CardOption)`
  background: green;
`;
const Back = styled(CardOption)`
  background: royalblue;
  transform: rotateY(180deg);
`;
const UserTitle = styled.div``;
const UserInfoBox = styled.div``;
const UserName = styled.div`
  line-height: 3rem;
`;
const UserNameInput = styled.input`
  line-height: 3rem;
`;
const UserInfo = styled.div`
  line-height: 3rem;
`;
const UserIntro = styled.div`
  margin-top: 2rem;
  width: 20rem;
`;
const UserIntroInput = styled.input`
  margin-top: 2rem;
  width: 20rem;
`;
const ButtonBox = styled.div`
  margin-left: 20rem;
`;
const CreateButton = styled.button`
  width: 5rem;
  height: 2rem;
`;
export default UserProfile;
