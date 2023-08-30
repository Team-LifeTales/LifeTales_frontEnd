import React from "react";
import { styled } from "styled-components";
import { TitleInput } from "../upload/Create";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { loginAsync } from "../../features/loginSlice/loginSlice";

interface LoginInputs {
  id: string;
  pwd: string;
}
const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(loginAsync(data));
  });
  const navigate = useNavigate();
  return (
    <form onSubmit={onSubmit}>
      <LoginBox>
        <Title>LOGIN</Title>
        <LoginInput
          placeholder="아이디"
          {...register("id", {
            required: "아이디를 채워주세요.",
            minLength: {
              value: 6,
              message: "최소6글자 이상입니다.",
            },
            maxLength: {
              value: 30,
              message: "최대글자수를 넘었습니다.",
            },
          })}
        ></LoginInput>
        <ErrorMessage>{errors.id?.message}</ErrorMessage>
        <LoginInput
          placeholder="비밀번호"
          {...register("pwd", {
            required: "비밀번호를 채워주세요.",
            minLength: {
              value: 8,
              message: "최소8글자 이상입니다.",
            },
            maxLength: {
              value: 30,
              message: "최대글자수를 넘었습니다.",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "영문(대소문자 구분) , 숫자 , 특수기호 3가지경우가 포함되어야합니다.",
            },
          })}
        ></LoginInput>
        <ErrorMessage>{errors.pwd?.message}</ErrorMessage>
        <LoginButton>로그인하기</LoginButton>
        <KakaoWithNaver>
          <KakaoButton type="button"></KakaoButton>
          <NaverButton type="button"></NaverButton>
          <AddUserButton
            onClick={() => {
              navigate("/SignUp");
            }}
            type="button"
          ></AddUserButton>
        </KakaoWithNaver>
      </LoginBox>
    </form>
  );
};
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 90vh;
  background-color: #e3efdb;
  border-radius: 30px;
  padding: 2rem;
  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.div`
  font-size: 4rem;
`;
const LoginInput = styled(TitleInput)`
  margin-top: 3%;
  width: 90%;
  height: 10%;
  min-height: 3rem;
`;
const ErrorMessage = styled.p`
  color: red;
`;
const LoginButton = styled.button`
  margin-top: 3%;
  width: 90%;
  height: 10%;
  border-radius: 30px;
  min-height: 3rem;
`;
const KakaoWithNaver = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  min-height: 5rem;
`;
const KakaoButton = styled.button`
  width: 4rem;
  height: 4rem;
  background-image: url("/img/kakao.png");
  background-size: contain;
  background-repeat: no-repeat;
  border: 0;
  border-radius: 40px;
  cursor: pointer;
  margin: 1rem;
`;
const NaverButton = styled(KakaoButton)`
  background-image: url("/img/naver.png");
`;
const AddUserButton = styled(NaverButton)`
  background-image: url("/img/addUser.png");
`;
export default Login;
