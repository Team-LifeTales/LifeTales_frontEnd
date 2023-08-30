import React, { useState } from "react";
import { styled } from "styled-components";
const HeartAction = () => {
  const [heartState, SetHeartState] = useState<boolean>(false);
  const onChange = () => {
    SetHeartState(!heartState);
  };
  return (
    <div>
      <HeartImage
        src={heartState ? "/img/redHeart.png" : "/img/grayHeart.png"}
        onClick={onChange}
      ></HeartImage>
    </div>
  );
};

const HeartImage = styled.img`
  cursor: pointer;
  margin-left: 13.5rem;
`;
export default HeartAction;
