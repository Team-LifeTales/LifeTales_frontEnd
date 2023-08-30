import React, { useRef, useState, useEffect } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import preventEvent from "../../util/preventEvent";
import { Props } from "./SignUp";
interface SignUpInputs {
  introduce: string;
}
const SignUpSecond = (props: Props) => {
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
    console.log(submitImage);
    props.handleStep();
  });
  useEffect(() => {
    console.log(showImage);
  }, [showImage]);
  return (
    <FormStyle onSubmit={onSubmit}>
      {showImage ? (
        <PreviewImageBox>
          <PreviewImage src={showImage}></PreviewImage>
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
        <DropBox
          onDragOver={(e) => preventEvent(e)}
          onDragEnter={(e) => preventEvent(e)}
          onDragLeave={(e) => preventEvent(e)}
          onDrop={(e) => handleFileDrop(e)}
          onClick={() => {
            imageRef.current?.click();
          }}
        >
          프로필이미지를 위해 여기를 클릭하거나 드랍해주세요
        </DropBox>
      )}
      <ContentInput
        placeholder="자신을 소개하는 글을 적어주세요"
        {...register("introduce", {
          maxLength: {
            value: 50,
            message: "최대글자수를 넘었습니다.",
          },
        })}
      ></ContentInput>
      {errors.introduce?.message}
      <SubmitButton>다음</SubmitButton>
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
export const DropBox = styled.div`
  min-width: 20rem;
  min-height: 5rem;
  height: 60vh;
  width: 40vw;
  border: 0.3rem dotted;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
export const PreviewImageBox = styled.div`
  position: relative;
  display: inline-block;
`;
export const PreviewImage = styled.img`
  min-width: 20rem;
  min-height: 5rem;
  height: 60vh;
  width: 40vw;
  border-radius: 30px;
`;
export const PreviewDelete = styled.button`
  position: absolute;
  width: 3rem;
  height: 2rem;
  top: 0%;
  right: 1rem;
  transform: translateY(-50%);
`;
const ContentInput = styled.textarea`
  margin-top: 2rem;
  font-size: 1rem;
  min-width: 20rem;
  min-height: 5rem;
  height: 20vh;
  width: 40vw;
  border: none;
  resize: none;
  outline: none;
  border: 0.2rem solid var(--green-color);
  padding: 1rem;
  border-radius: 30px;
`;
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 3rem;
`;
export default SignUpSecond;
