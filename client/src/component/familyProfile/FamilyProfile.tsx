import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PostGrid from "../post/PostGrid";
import {
  Back,
  ButtonBox,
  Card,
  CreateButton,
  Front,
  ImageWithTitleBox,
  UserImage,
  UserInfo,
  UserInfoBox,
  UserIntro,
  UserIntroInput,
  UserName,
  UserNameInput,
  UserProfileBox,
  UserTitle,
} from "../userProfile/UserProfile";
import {
  familyProfileEdit,
  familyProfileEditDone,
  loadFamilyFeedAsync,
} from "../../features/familyProfileSlice/familyProfileSlice";
const FamilyProfile = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.familyProfile.status);

  const navigate = useNavigate();

  useEffect(() => {
    // mount 시점, deps update 시점에 실행할 작업 (componentDidMount)
    return () => {
      //unmount 시점, deps update 직전에 실행할 작업 (componentWillUnmount)
      dispatch(familyProfileEditDone());
    };
  }, []);
  useEffect(() => {}, [status]);
  useEffect(() => {
    dispatch(loadFamilyFeedAsync());
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
          <UserTitle></UserTitle>
        </ImageWithTitleBox>
        <UserInfoBox>
          {status === "edit" ? (
            <UserNameInput value="홍길동" readOnly />
          ) : (
            <UserName>김해김씨</UserName>
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            <UserInfo>게시글 0</UserInfo>
            <FamilyCount>멤버수 0</FamilyCount>
          </div>
          {status === "edit" ? (
            <UserIntroInput
              value="에습하의 윈터입니다 반가워요 ^^"
              readOnly
            ></UserIntroInput>
          ) : (
            <UserIntro>김해김씨가족입니다 어서오세요</UserIntro>
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
                dispatch(familyProfileEditDone());
              }}
            >
              적용하기
            </CreateButton>
          ) : (
            <CreateButton
              onClick={() => {
                dispatch(familyProfileEdit());
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

const FamilyCount = styled.div``;
export default FamilyProfile;
