import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { IMG_URL } from "../../constants";
import { Layout } from "../../components/Layout";
import { baseFontSize } from "../../style/GlobalStyled";

const Wrap = styled.div`
  margin-bottom: 80px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 80px;
`;

const Title = styled.div`
  font-size: ${baseFontSize.titleSize};
  font-weight: 900;
  margin-right: 50px;
`;

const BtnWrap = styled.button`
  all: unset;
  width: 110px;
  height: 40px;
  background-color: white;
  border-radius: 30px;
  line-height: 40px;
  text-align: center;
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: #333;
    font-size: ${baseFontSize.baseSize};
    font-weight: 600;
  }
`;

const Con = styled.div`
  width: 300px;
  height: 400px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: true,
  modules: [EffectCoverflow, Pagination],
};

export const TrendLayout = ({ titleName, trendListData }) => {
  return (
    <Layout>
      <Wrap>
        <TitleWrap>
          <Title>{titleName}</Title>
          <BtnWrap>
            <Link>+ 더 보기</Link>
          </BtnWrap>
        </TitleWrap>

        <Swiper {...params}>
          {trendListData
            .map((data) => (
              <SwiperSlide key={data.id}>
                <Link>
                  <Con $bgUrl={data.poster_path}></Con>
                </Link>
              </SwiperSlide>
            ))
            .slice(0, 10)}
        </Swiper>
      </Wrap>
    </Layout>
  );
};
