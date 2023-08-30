import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
const navContentList = [
  { name: "홈", image: "/img/home.png", url: "/Home" },
  { name: "검색", image: "/img/search.png", url: "/Search" },
  { name: "프로필", image: "/img/profile.png", url: "/User" },
  { name: "가족", image: "/img/family.png", url: "" },
  { name: "채팅", image: "/img/chat.png", url: "/ChatRoom" },
  { name: "A.I가이드", image: "/img/AI.png", url: "" },
  { name: "가족일기", image: "/img/diary.png", url: "" },
  { name: "설정", image: "/img/setting.png", url: "" },
];
const LeftBar = () => {
  const navigate = useNavigate();
  return (
    <LeftBarBox>
      <LogoBox>LOGO</LogoBox>
      <Navigation>
        <ul style={{ padding: "0", margin: "0" }}>
          {navContentList.map((value, index) => {
            return (
              <NavContent
                key={index}
                onClick={() => {
                  navigate(`${value.url}`);
                }}
              >
                <img src={value.image} style={{ marginRight: "0.5rem" }} />
                {value.name}
              </NavContent>
            );
          })}
        </ul>
      </Navigation>
      <UserInfo>
        <UserImg>
          <UserImgContent src="/img/AI.png"></UserImgContent>
        </UserImg>
        <UserName>
          <p style={{ fontSize: "1.5rem" }}>UserName</p>
          <p>#UserNumber</p>
        </UserName>
      </UserInfo>
    </LeftBarBox>
  );
};

const LeftBarBox = styled.div`
  width: 15rem;
  height: 100vh;
  background-color: var(--background-color));
  position: fixed;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
const LogoBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Navigation = styled.div`
  height: 40rem;
`;
const NavContent = styled.li`
  list-style-type: none;
  margin-left: 1rem;
  padding-left: 2rem;
  border-radius: 20px;
  line-height: 5rem;
  color: var(--green-color);
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #e3efdb;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  line-height: 1rem;
`;
export const UserImg = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: green;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 1rem;
`;
export const UserImgContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const UserName = styled.div``;

export default LeftBar;
