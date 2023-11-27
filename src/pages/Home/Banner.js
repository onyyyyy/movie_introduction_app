import styled from "styled-components";
import { IMG_URL } from "../../constants";

const MainBanner = styled.div`
  height: 80vh;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
`;
const BgBlack = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 18%,
    rgba(255, 255, 255, 0.5080882694874824) 100%
  );
`;

export const Banner = ({ bannerData }) => {
  return (
    <MainBanner $bgUrl={bannerData.backdrop_path}>
      <BgBlack />
    </MainBanner>
  );
};
