import styled from "styled-components";
import { baseFontSize } from "../../style/GlobalStyled";
import { IMG_URL } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useScrollTop } from "../../lib/useScrollTop";

const Wrap = styled.div`
  padding: 100px 5%;
  @media screen and (max-width: 450px) {
    padding: 50px 5%;
  }
`;

const Title = styled.h3`
  font-size: ${baseFontSize.titleSize};
  font-weight: 900;
  margin-bottom: 50px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 50px;
  row-gap: 80px;
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 50px;
  }
`;

const Con = styled.div`
  h4 {
    font-size: ${baseFontSize.movieTitleSize};
    font-weight: 700;
    line-height: 24px;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`;

const Bg = styled.div`
  height: 350px;
  background: url(${IMG_URL}/w500/${(props) => props.$bg}) no-repeat center /
    cover;
  margin-bottom: 10px;
  @media screen and (max-width: 450px) {
    height: 200px;
  }
`;

export const List = () => {
  useScrollTop();
  const data = useLocation();
  // console.log(data);

  return (
    <Layout>
      <Wrap>
        <Title>{data.state.title}</Title>

        <ConWrap>
          {data.state.listdata.map((movie) => (
            <Con key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <Bg $bg={movie.poster_path} />
                <h4>{movie.title}</h4>
              </Link>
            </Con>
          ))}
        </ConWrap>
      </Wrap>
    </Layout>
  );
};
