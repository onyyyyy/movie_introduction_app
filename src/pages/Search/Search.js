import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieSearch } from "../../api";
import { baseFontSize } from "../../style/GlobalStyled";
import { IMG_URL } from "../../constants";
import { Layout } from "../../components/Layout";
import { useScrollTop } from "../../lib/useScrollTop";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 100px 5%;
`;
const Title = styled.h3`
  font-size: ${baseFontSize.titleSize};
  font-weight: 900;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    font-weight: 800;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 450px) {
    width: 55%;

    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Form = styled.form`
  all: unset;
  display: block;
  width: 60%;
  height: 50px;
  border-radius: 50px;
  background-color: white;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Input = styled.input`
  all: unset;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  color: #333;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 30px;
  padding: 100px 0;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    padding: 50px 0;
  }
`;
const Con = styled.div``;
const Bg = styled.div`
  height: 500px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 1024px) {
    height: 400px;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
const MoivieTitle = styled.div`
  margin-top: 20px;
  font-size: 26px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    margin-top: 10px;
    font-size: 24px;
    line-height: 26px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Search = () => {
  useScrollTop();
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const [word, setWord] = useState();
  // const baSearch = useLocation();
  // console.log(baSearch);

  const SearchHandler = async (data) => {
    // console.log(data);
    const { search: keyword } = data;

    try {
      const { results } = await movieSearch(keyword);
      // console.log(results);
      setWord(results);
    } catch (error) {
      console.log("Error" + error);
    }
  };

  // console.log(word);
  return (
    <Wrap>
      <Title>찾으시는 영화가 있으신가요?</Title>
      <Form onSubmit={handleSubmit(SearchHandler)}>
        <Input
          {...register("search", {
            required: "검색어를 입력해주세요",
          })}
          type="text"
          placeholder="영화 제목을 검색해주세요!"
        />
      </Form>

      {word && (
        <ConWrap>
          {word.map((data) => (
            <Con key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <Bg $bgUrl={data.poster_path} />
                <MoivieTitle>{data.title}</MoivieTitle>
              </Link>
            </Con>
          ))}
        </ConWrap>
      )}
    </Wrap>
  );
};
