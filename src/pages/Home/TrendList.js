import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { baseFontSize, mainColor } from "../../style/GlobalStyled";
import { IMG_URL } from "../../constants";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { routes } from "../../routes";

const Wrap = styled.div`
  height: 300px;
  position: relative;
  margin-bottom: 80px;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
`;

const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  /* background-color: lightgray; */
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const Box = styled.div`
  width: 250px;
  height: 100%;
  background-color: ${mainColor.blackColor};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  h3 {
    font-size: ${baseFontSize.titleSize};
    font-weight: 700;
  }
`;

const params = {
  spaceBetween: 30,
  slidesPerView: 5.5,
  // centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
};

export const TrendList = ({ trendListData, titleName }) => {
  return (
    <Wrap>
      <Swiper {...params}>
        {trendListData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <Con $bgUrl={data.poster_path}></Con>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box>
        <h3>{titleName}</h3>
      </Box>
    </Wrap>
  );
};
