import React, { useEffect, useState } from "react";
import { TitleInput } from "../upload/Create";
import { styled } from "styled-components";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  emailCheckAsync,
  idCheckAsync,
  signupAsync,
  updateEmailContent,
  updateIdContent,
} from "../../features/signupSlice/signupSlice";
import SignUpEmailModal from "./SignUpEmailModal";
import { dateFormat } from "../../util/dateFormat";
export interface Props {
  handleStep: () => void;
}
export interface signUpInputs {
  id: string;
  password: string;
  name: string;
  email: string;
  nickName: string;
  birthDayBefore: Date;
  birthDay: string;
  phoneNumber: string;
}
const SignUp = (props: Props) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<signUpInputs>();
  const confirmedId = useAppSelector(
    (state) => state.signup.first.id.idContent
  );
  const confirmedEmail = useAppSelector(
    (state) => state.signup.first.email.emailContent
  );
  const confirmedIdBoolean = useAppSelector(
    (state) => state.signup.first.id.confirmed
  );
  const confirmedEmailBoolean = useAppSelector(
    (state) => state.signup.first.email.confirmed
  );
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const offModal = () => {
    setIsOpen(false);
  };
  const onModal = () => {
    setIsOpen(true);
  };
  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const birthDayForm = dateFormat(data.birthDayBefore);
    data.birthDay = birthDayForm;
    dispatch(signupAsync(data));
    props.handleStep();
  });
  const checkId = (id: string) => {
    const regex = /^.{6,30}$/;
    if (regex.test(id)) {
      dispatch(idCheckAsync(id)).then(({ payload }) => {
        if (payload === true) {
          dispatch(updateIdContent(id));
          alert("아이디 사용가능합니다!");
        } else {
          alert("사용불가능한 아이디입니다");
        }
      });
    } else {
      alert("6글자이상 30글자이하입니다");
    }
  };
  const checkEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      onModal();
      dispatch(emailCheckAsync(email)).then(() => {
        dispatch(updateEmailContent(email));
      });
    } else {
      alert("이메일형식을 맞춰주세요");
    }
  };
  useEffect(() => {}, [
    confirmedIdBoolean,
    confirmedEmail,
    confirmedId,
    confirmedEmailBoolean,
  ]);
  return (
    <form onSubmit={onSubmit}>
      <SignUpRow>
        <Label>아이디 :</Label>
        <SignUpInput
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
            validate: (value) =>
              value == confirmedId ||
              `${value} ${confirmedId}아이디 확인을 해주세요!`,
          })}
        ></SignUpInput>
        <ConfirmButton
          type="button"
          onClick={() => {
            const values = getValues();
            console.log(values.id);
            checkId(values.id);
          }}
        >
          아이디 확인
        </ConfirmButton>
      </SignUpRow>
      <Error>{errors.id?.message}</Error>

      <SignUpRow>
        <Label>비밀번호 :</Label>
        <SignUpInput
          type="password"
          {...register("password", {
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
        ></SignUpInput>
      </SignUpRow>
      <Error>{errors.password?.message}</Error>

      <SignUpRow>
        <Label>이름 :</Label>
        <SignUpInput
          {...register("name", {
            required: "이름을 채워주세요.",
            minLength: {
              value: 2,
              message: "최소2글자 이상입니다.",
            },
            maxLength: {
              value: 6,
              message: "최대글자수를 넘었습니다.",
            },
            pattern: {
              value: /^[ㄱ-ㅎ|가-힣]+$/,
              message: "한글만 가능합니다.",
            },
          })}
        ></SignUpInput>
      </SignUpRow>
      <Error>{errors.name?.message}</Error>
      <SignUpRow>
        <Label>이메일 :</Label>
        <SignUpInput
          {...register("email", {
            minLength: {
              value: 10,
              message: "최소10글자 이상입니다.",
            },
            maxLength: {
              value: 50,
              message: "최대글자수를 넘었습니다.",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "이메일 형식을 맞춰주세요.",
            },
            validate: (value) =>
              value === confirmedEmail || "이메일 인증을 해주세요!",
          })}
        ></SignUpInput>
        <ConfirmButton
          type="button"
          onClick={() => {
            const values = getValues();
            checkEmail(values.email);
          }}
        >
          이메일 인증
        </ConfirmButton>
        <SignUpEmailModal
          modalIsOpen={modalIsOpen}
          offModal={offModal}
        ></SignUpEmailModal>
      </SignUpRow>
      <Error>{errors.email?.message}</Error>
      <SignUpRow>
        <Label>닉네임 :</Label>
        <SignUpInput
          {...register("nickName", {
            required: "닉네임을 채워주세요.",
            minLength: {
              value: 2,
              message: "최소2글자 이상입니다.",
            },
            maxLength: {
              value: 10,
              message: "최대글자수를 넘었습니다.",
            },
            pattern: {
              value: /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]*$/,
              message: "특수기호를 제외하여주세요.",
            },
          })}
        ></SignUpInput>
      </SignUpRow>
      <Error>{errors.nickName?.message}</Error>
      <SignUpRow>
        <Label>생년월일 :</Label>
        <Controller
          control={control}
          name="birthDayBefore"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePickerStyle
              dateFormat="yyyy-MM-dd"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              locale={ko}
              showMonthDropdown
              showYearDropdown
            />
          )}
        ></Controller>
      </SignUpRow>
      <SignUpRow>
        <Label>핸드폰번호 :</Label>
        <SignUpInput
          {...register("phoneNumber", {
            required: "전화번호를 채워주세요.",
            pattern: {
              value: /^[a-zA-Z0-9]*$/,
              message: "-를 제외하여주세요.",
            },
          })}
        ></SignUpInput>
      </SignUpRow>
      <Error>{errors.phoneNumber?.message}</Error>
      <SubmitButton>다음단계</SubmitButton>
      <SubmitButton type="button" onClick={() => props.handleStep()}>
        테스트 다음단계
      </SubmitButton>
    </form>
  );
};
const SignUpInput = styled(TitleInput)`
  width: 100%;
  min-height: 2rem;
  min-width: 20rem;
`;
const DatePickerStyle = styled(DatePicker)`
  width: 100%;
  min-height: 2rem;
  min-width: 20rem;
  font-size: 2rem;
  padding: 1rem;
  border: 0.2rem solid var(--green-color);
  border-radius: 30px;
  height: 4rem;
  &:focus {
    outline: none;
  }
`;
const SignUpRow = styled.div`
  display: flex;
  align-items: center;
  width: 50rem;
  min-width: 30rem;
  margin-top: 1rem;
`;
const Label = styled.div`
  min-width: 6rem;
`;
const ConfirmButton = styled.button`
  min-width: 6rem;
  min-height: 3rem;
  margin: 1rem;
`;
const SubmitButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 10%;
`;
const Error = styled.div`
  width: 100%;
  height: 1rem;
  color: red;
  text-align: right;
`;
export default SignUp;
