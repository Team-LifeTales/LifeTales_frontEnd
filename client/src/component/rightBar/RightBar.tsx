import { styled } from "styled-components";
const RightBar = () => {
  return <RightBarBox></RightBarBox>;
};
const RightBarBox = styled.div`
  width: 20rem;
  height: 100vh;
  background-color: blue;
  position: fixed;
  top: 0;
  right: 0;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export default RightBar;
