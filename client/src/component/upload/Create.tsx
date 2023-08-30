import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import preventEvent from "../../util/preventEvent";
interface FormValues {
  title: string;
  content: string;
  check: boolean;
  images: FileList;
}
const Create = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [imageList, setImageList] = useState<Array<File>>([]);
  const imageInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("유즈스테이트 :", imageList);
  }, [imageList]);
  const handleDeleteImage = (index: number) => {
    const newArray = imageList.filter((_, id) => index !== id);
    setImageList(newArray);
  };
  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    setImageList([...imageList, ...files]);
  };
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <TitleWidthCheckBox>
        <TitleInput placeholder="제목:" {...register("title")}></TitleInput>
        <div style={{ marginLeft: "0.5rem" }}>
          <p style={{ margin: "0", fontSize: "1rem" }}> 공지글</p>
          <AnnouncementCheckBox
            type="checkbox"
            {...register("check")}
          ></AnnouncementCheckBox>
        </div>
      </TitleWidthCheckBox>

      <ContentInput placeholder="내용:" {...register("content")}></ContentInput>

      <DropBox
        onDragOver={(e) => preventEvent(e)}
        onDragEnter={(e) => preventEvent(e)}
        onDragLeave={(e) => preventEvent(e)}
        onDrop={(e) => handleFileDrop(e)}
      >
        {imageList.length === 0 ? (
          <>
            <img src="/img/dropBox.png"></img>
            <p>사진 드래그하기</p>
          </>
        ) : (
          <>
            {imageList?.map((file, index) => (
              <div key={index}>
                {file.name}
                <button onClick={() => handleDeleteImage(index)}>삭제</button>
              </div>
            ))}
          </>
        )}
      </DropBox>
      <ButtonGroup>
        <div
          style={{
            display: "flex",
            width: "15rem",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="button"
            onClick={() => {
              imageInput.current?.click();
            }}
          >
            내 컴퓨터
          </Button>
          <Button type="button" onClick={() => {}}>
            A.I추천
          </Button>
        </div>
        <SubmitButton type="submit" onClick={onSubmit}>
          글 올리기
        </SubmitButton>
      </ButtonGroup>
      <FileInput
        type="file"
        id="images"
        onChange={(event) => {
          if (event.target.files) {
            const updatedFiles = event.target.files;
            setImageList([...imageList, ...updatedFiles]);
          }
        }}
        ref={imageInput}
        multiple
      />
    </form>
  );
};
export const TitleInput = styled.input`
  font-size: 2rem;
  width: 50rem;
  padding: 1rem;
  border: 0.2rem solid var(--green-color);
  border-radius: 30px;
  height: 4rem;
  &:focus {
    outline: none;
  }
`;
const TitleWidthCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AnnouncementCheckBox = styled.input`
  width: 3rem;
  height: 3rem;
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
const DropBox = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 2rem;
  width: 50rem;
  height: 15rem;
  border: 0.2rem dotted var(--green-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  margin-top: 1rem;
  width: 50rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
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
const FileInput = styled.input`
  display: none;
`;
export default Create;
