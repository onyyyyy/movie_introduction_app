import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieSearch } from "../../api";

const Wrap = styled.div`
  padding: 100px 5%;
`;
const Title = styled.h3``;
const Form = styled.form``;
const Input = styled.input``;

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
    </Wrap>
  );
};
