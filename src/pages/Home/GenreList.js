import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Wrap = styled.div``;
const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: lightgray;
  font-size: 30px;
  font-weight: 600;
`;

const params = {
  spaceBetween: 30,
  slidesPerView: 5.5,
};

export const GenreList = ({ genreNameData }) => {
  return (
    <Wrap>
      <Swiper {...params}>
        {genreNameData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link>
              <Con>{data.name}</Con>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
};
