import HomeList from "../component/homeList/HomeList";
import LeftBar from "../component/leftBar/LeftBar";

import RightBar from "../component/rightBar/RightBar";
const HomePage = () => {
  return (
    <>
      <LeftBar />
      <HomeList></HomeList>
      <RightBar />
    </>
  );
};

export default HomePage;
