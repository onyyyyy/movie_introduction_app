import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieDetail } from "../../api";
import { baseFontSize } from "../../style/GlobalStyled";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  padding: 200px 20%;
  justify-content: space-between;
  align-items: center;
`;
const Poster = styled.div`
  width: 45%;
  height: 500px;
  /* background-color: lightblue; */
  background: url(${IMG_URL}/w500/${(props) => props.$bg}) no-repeat center /
    cover;
`;
const ConWrap = styled.div`
  width: 45%;
`;

const TopWrap = styled.div``;
const Title = styled.h3`
  font-size: ${baseFontSize.titleSize};
  font-weight: 600;
  margin-bottom: 30px;
`;
const TagLine = styled.h4`
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 40px;
`;

const MidWrap = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 26px;
`;
const Grade = styled.div`
  width: 100px;
  height: 30px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: white;
  color: #333;
  text-align: center;
  margin: 10px;
`;
const Release = styled.div``;
const Genre = styled.div``;
const Summary = styled.p`
  font-size: 18px;
  line-height: 24px;
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: lightgray;
`;

export const Detail = () => {
  const { id } = useParams();
  // console.log(id);
  // console.log(data);

  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        // console.log(detailData);
        setMovieData(detailData);
        setIsLoading(false);
      } catch (error) {}
    })();
  }, [id]);

  console.log(movieData);

  return isLoading ? (
    <Loading />
  ) : (
    <Wrap>
      <Poster $bg={movieData.poster_path}></Poster>
      <ConWrap>
        <TopWrap>
          <Title>{movieData.title}</Title>
          <TagLine>"{movieData.tagline}"</TagLine>
          <MidWrap>
            <Grade>평점 : {Math.round(movieData.vote_average)}점</Grade>
            <Release>개봉일 : {movieData.release_date}</Release>
            <Genre>
              {movieData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genre>
          </MidWrap>
          <Summary>{movieData.overview}</Summary>
        </TopWrap>
        <Line></Line>
      </ConWrap>
    </Wrap>
  );
};
