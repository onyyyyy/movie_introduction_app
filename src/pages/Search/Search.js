import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieSearch } from "../../api";
import { baseFontSize } from "../../style/GlobalStyled";
import { IMG_URL } from "../../constants";
import { Layout } from "../../components/Layout";

const Wrap = styled.div`
  padding: 100px 5%;
`;
const Title = styled.h3`
  font-size: ${baseFontSize.titleSize};
  font-weight: 900;
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: 30px;
    font-weight: 800;
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
  @media screen and (max-width: 450px) {
    width: 80%;
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
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Con = styled.div``;
const Bg = styled.div`
  height: 500px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 450px) {
    height: 300px;
  }
`;
const MoivieTitle = styled.div`
  margin-top: 20px;
  font-size: 26px;
  font-weight: 700;
  @media screen and (max-width: 450px) {
    margin-top: 10px;
    font-size: 22px;
  }
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [word, setWord] = useState();

  const SearchHandler = async (data) => {
    console.log(data);
    const { search: keyword } = data;

    try {
      const { results } = await movieSearch(keyword);
      // console.log(results);
      setWord(results);
    } catch (error) {
      console.log("Error" + error);
    }
  };

  console.log(word);
  return (
    <Wrap>
      <Title>영화 제목을 검색해주세요!</Title>
      <Form onSubmit={handleSubmit(SearchHandler)}>
        <Input
          {...register("search", {
            required: "검색어를 입력해주세요",
          })}
          type="text"
          placeholder="찾으시는 영화가 있으신가요?"
        />
      </Form>

      <Layout>
        {word && (
          <ConWrap>
            {word.map((data) => (
              <Con key={data.id}>
                <Bg $bgUrl={data.poster_path} />
                <MoivieTitle>{data.title}</MoivieTitle>
              </Con>
            ))}
          </ConWrap>
        )}
      </Layout>
    </Wrap>
  );
};
