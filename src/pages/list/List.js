import styled from "styled-components";
import { baseFontSize } from "../../style/GlobalStyled";
import { IMG_URL } from "../../constants";

const Wrap = styled.div``;

const Title = styled.h3`
  font-size: ${baseFontSize.titleSize};
  font-weight: 900;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 50px;
  row-gap: 50px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 500px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const MovieTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const List = ({ listName, listData }) => {
  return (
    <Wrap>
      <Title>{listName}</Title>
      <ConWrap>
        {listData.map((data) => (
          <Con>
            <Bg $bgUrl={data.poster_path} />
            <MovieTitle>{data.title}</MovieTitle>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};
