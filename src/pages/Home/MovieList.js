import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

const Wrap = styled.section`
  padding: 100px 5%;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
`;
const Poster = styled.div`
  height: 300px;
  background-color: aliceblue;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;
const MovieTitle = styled.h4`
  margin-top: 20px;
  font-size: 18px;
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,
};

export const MovieList = ({ titleName, movieListData }) => {
  return (
    <Wrap>
      <Title>{titleName}</Title>
      <Swiper {...params}>
        {movieListData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link>
              <Poster $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
};
