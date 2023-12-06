import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { baseFontSize, mainColor } from "../../style/GlobalStyled";
import { IMG_URL } from "../../constants";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Wrap = styled.div`
  height: 300px;
  position: relative;
  margin-bottom: 80px;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  @media screen and (max-width: 768px) {
    height: 250px;
  }
  @media screen and (max-width: 450px) {
    height: 200px;
  }
`;

const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  /* background-color: lightgray; */
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
  @media screen and (max-width: 450px) {
    height: 200px;
  }
`;

const Box = styled.div`
  word-break: break-all;
  /* padding: 0 2%; */
  width: 220px;
  height: 100%;
  line-height: 64px;
  background-color: ${mainColor.blackColor};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  h3 {
    width: 70%;
    font-size: ${baseFontSize.titleSize};
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 170px;
    line-height: 50px;
    h3 {
      width: 80%;
      font-size: 46px;
    }
  }

  @media screen and (max-width: 450px) {
    height: 100%;
    width: 150px;
    line-height: 40px;
    h3 {
      width: 80%;
      font-size: 34px;
    }
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
  breakpoints: {
    1024: {
      spaceBetween: 30,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 20,
      slidesPerView: 4.2,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.2,
    },
  },
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
