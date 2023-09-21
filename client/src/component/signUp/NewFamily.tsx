import React, { useRef, useState } from "react";
import { styled } from "styled-components";

import { TitleInput } from "../upload/Create";
import { useForm } from "react-hook-form";
import {
  DropBox,
  PreviewDelete,
  PreviewImage,
  PreviewImageBox,
} from "./SignUpSecond";
import preventEvent from "../../util/preventEvent";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { familySignupAsync } from "../../features/signupSlice/signupSlice";
interface SignUpInputs {
  nickName: string;
  introduce: string;
  familySignInQuestion: string;
  familySignInAnswer: string;
}
const NewFamily = () => {
  const userId = useAppSelector((state) => state.signup.first.id.idContent);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const [submitImage, setSubmitImage] = useState<File | null>(null);
  const [showImage, setShowImage] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const saveImageFile = () => {
    if (imageRef.current && imageRef.current.files) {
      const file = imageRef.current.files[0];
      setSubmitImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result == "string") {
          setShowImage(reader.result);
        }
      };
    }
  };
  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    const file = files[0];
    setSubmitImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result == "string") {
        setShowImage(reader.result);
      }
    };
  };
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const formData = new FormData();
    if (submitImage) {
      formData.append("profileIMG", submitImage);
    }
    formData.append("introduce", data.introduce);
    formData.append("nickName", data.nickName);
    formData.append("familySignInQuestion", data.familySignInQuestion);
    formData.append("familySignInAnswer", data.familySignInAnswer);
    if (userId) {
      formData.append("userId", userId);
    }
    dispatch(familySignupAsync(formData));
    // navigate("/");
  });
  return (
    <FormStyle onSubmit={onSubmit}>
      <FamilyInput
        placeholder="가문이름"
        {...register("nickName", {
          required: "가문이름을 채워주세요.",
          minLength: {
            value: 2,
            message: "최소2글자 이상입니다.",
          },
          maxLength: {
            value: 10,
            message: "최대글자수를 넘었습니다.",
          },
        })}
      ></FamilyInput>
      <FamilyError>{errors.nickName?.message}</FamilyError>
      {showImage ? (
        <PreviewImageBox>
          <FamilyPreviewImage src={showImage}></FamilyPreviewImage>
          <PreviewDelete
            onClick={() => {
              setSubmitImage(null);
              setShowImage("");
            }}
          >
            삭제
          </PreviewDelete>
        </PreviewImageBox>
      ) : (
        <FamilyDropBox
          onDragOver={(e) => preventEvent(e)}
          onDragEnter={(e) => preventEvent(e)}
          onDragLeave={(e) => preventEvent(e)}
          onDrop={(e) => handleFileDrop(e)}
          onClick={() => {
            imageRef.current?.click();
          }}
        >
          프로필이미지를 위해 여기를 클릭하거나 드랍해주세요
        </FamilyDropBox>
      )}
      <FamilyInput
        placeholder="가문소개"
        {...register("introduce", {
          maxLength: {
            value: 30,
            message: "최대글자수를 넘었습니다.",
          },
        })}
      ></FamilyInput>
      <FamilyError>{errors.introduce?.message}</FamilyError>
      <FamilyInput
        placeholder="가문질문"
        {...register("familySignInQuestion", {
          required: "질문을 채워주세요.",
          maxLength: {
            value: 30,
            message: "최대글자수를 넘었습니다.",
          },
        })}
      ></FamilyInput>
      <FamilyError>{errors.familySignInQuestion?.message}</FamilyError>
      <FamilyInput
        placeholder="가문답변"
        {...register("familySignInAnswer", {
          required: "답변을 채워주세요.",
          maxLength: {
            value: 20,
            message: "최대글자수를 넘었습니다.",
          },
        })}
      ></FamilyInput>
      <FamilyError>{errors.familySignInAnswer?.message}</FamilyError>
      <FamilySubmitButton type="submit">완료</FamilySubmitButton>
      <input
        type="file"
        id="images"
        onChange={saveImageFile}
        ref={imageRef}
        style={{ display: "none" }}
      />
    </FormStyle>
  );
};
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FamilyInput = styled(TitleInput)`
  width: 40vw;
  height: 6vh;
  min-height: 3rem;
  min-width: 5rem;
`;

const FamilyDropBox = styled(DropBox)`
  width: 40vw;
  height: 30vh;
  margin-bottom: 1rem;
`;
const FamilyPreviewImage = styled(PreviewImage)`
  width: 40vw;
  height: 30vh;
  margin-bottom: 1rem;
`;
const FamilySubmitButton = styled.button`
  width: 4rem;
  height: 2rem;
`;
const FamilyError = styled.p`
  color: red;
  width: 40vw;
  height: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: end;
`;
export default NewFamily;
