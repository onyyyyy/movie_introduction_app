import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Virtual } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import { baseFontSize } from "../../style/GlobalStyled";
// import "swiper/css/virtual";

const Wrap = styled.section`
  /* padding: 100px 5%; */
  margin-bottom: 100px;
  @media screen and (max-width: 450px) {
    margin-bottom: 80px;
  }
`;
const Title = styled.h3`
  font-size: ${baseFontSize.titleSize};
  font-weight: 700;
  margin-bottom: 50px;
`;
const Poster = styled.div`
  height: 400px;
  background-color: aliceblue;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 768px) {
    height: 300px;
  }
  @media screen and (max-width: 450px) {
    height: 200px;
  }
`;
const MovieTitle = styled.h4`
  margin-top: 20px;
  font-size: ${baseFontSize.movieTitleSize};
  @media screen and (max-width: 450px) {
    margin-top: 10px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 4.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 4.5,
    },
    640: {
      spaceBetween: 20,
      slidesPerView: 3.8,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 2.8,
    },
  },
};

export const MovieList = ({ titleName, movieListData }) => {
  return (
    <Wrap>
      <Title>{titleName}</Title>
      <Swiper {...params}>
        {movieListData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <Poster $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
};
