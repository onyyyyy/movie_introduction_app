import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { baseFontSize, mainColor } from "../../style/GlobalStyled";

const Wrap = styled.div`
  height: 200px;
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
`;

const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: lightgray;
  font-size: 30px;
  font-weight: 600;
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

      <Box>
        <h3>
          Genre
          <br />
          List
        </h3>
      </Box>
    </Wrap>
  );
};
