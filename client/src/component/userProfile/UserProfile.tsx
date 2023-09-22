import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  userProfileEdit,
  userProfileEditDone,
  loadUserFeedAsync,
} from "../../features/userProfileSlice/userProfileSlice";
import PostGrid from "../post/PostGrid";
const UserProfile = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.userProfile.status);

  const navigate = useNavigate();

  useEffect(() => {
    // mount 시점, deps update 시점에 실행할 작업 (componentDidMount)
    return () => {
      //unmount 시점, deps update 직전에 실행할 작업 (componentWillUnmount)
      dispatch(userProfileEditDone());
    };
  }, []);
  useEffect(() => {}, [status]);
  useEffect(() => {
    dispatch(loadUserFeedAsync());
  }, []);
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
                dispatch(userProfileEditDone());
              }}
            >
              적용하기
            </CreateButton>
          ) : (
            <CreateButton
              onClick={() => {
                dispatch(userProfileEdit());
              }}
            >
              편집하기
            </CreateButton>
          )}
        </ButtonBox>
      </UserProfileBox>
      <PostGrid></PostGrid>
    </>
  );
};
export const UserProfileBox = styled.div`
  display: flex;
  margin: 4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
`;
export const ImageWithTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  item-align: center;
  text-align: center;
  margin-right: 2rem;
`;
export const UserImage = styled.div`
  width: 15rem;
  height: 15rem;
  overflow: hidden;
`;
export const Card = styled.div`
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
export const CardOption = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  backface-visibility: hidden;
`;
export const Front = styled(CardOption)`
  background: green;
`;
export const Back = styled(CardOption)`
  background: royalblue;
  transform: rotateY(180deg);
`;
export const UserTitle = styled.div`
  height: 1rem;
`;
export const UserInfoBox = styled.div`
  height: 10rem;
`;
export const UserName = styled.div`
  line-height: 3rem;
`;
export const UserNameInput = styled.input`
  line-height: 3rem;
`;
export const UserInfo = styled.div`
  line-height: 3rem;
  width: 5rem;
`;
export const UserIntro = styled.div`
  margin-top: 2rem;
  width: 20rem;
`;
export const UserIntroInput = styled.input`
  margin-top: 2rem;
  width: 20rem;
`;
export const ButtonBox = styled.div`
  margin-left: 20rem;
`;
export const CreateButton = styled.button`
  width: 5rem;
  height: 2rem;
`;
export default UserProfile;
