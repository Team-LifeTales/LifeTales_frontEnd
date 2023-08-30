import React from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { TitleInput } from "./Create";
const Update = () => {
  interface FormValues {
    title: string;
    content: string;
  }
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <TitleWidthCheckBox>
        <TitleInput placeholder="제목:" {...register("title")}></TitleInput>
      </TitleWidthCheckBox>

      <ContentInput placeholder="내용:" {...register("content")}></ContentInput>

      <ButtonGroup>
        <SubmitButton type="submit" onClick={onSubmit}>
          글 수정하기
        </SubmitButton>
      </ButtonGroup>
    </form>
  );
};
const TitleWidthCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentInput = styled.textarea`
  margin-top: 2rem;
  font-size: 2rem;
  height: 25rem;
  width: 50rem;
  border: none;
  resize: none;
  outline: none;
  border: 0.2rem solid var(--green-color);
  padding: 1rem;
  border-radius: 30px;
`;

const ButtonGroup = styled.div`
  margin-top: 1rem;
  width: 50rem;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SubmitButton = styled.button`
  font-weight: bold;
  font-size: 1rem;
  border-radius: 10px;
  background-color: var(--green-color);
  border: 0;
  width: 7rem;
  height: 2.5rem;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

export default Update;
