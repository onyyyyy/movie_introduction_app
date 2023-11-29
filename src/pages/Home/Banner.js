import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { useForm } from "react-hook-form";

const MainBanner = styled.div`
  height: 80vh;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  position: relative;
`;
const BgBlack = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 18%,
    rgba(255, 255, 255, 0.5080882694874824) 100%
  );
`;

const Form = styled.form`
  width: 60%;
  height: 60px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #333;
  padding: 0 20px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
`;

export const Banner = ({ bannerData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isVaild },
  } = useForm({
    mode: "onSubmit",
  });

  const SearchHandler = (data) => {
    console.log(data);
  };
  return (
    <MainBanner $bgUrl={bannerData.backdrop_path}>
      <BgBlack />
      <Form onSubmit={handleSubmit(SearchHandler)}>
        <Input
          {...register("search", {
            required: "검색어를 입력해주세요",
          })}
          type="text"
          placeholder="어떤 영화를 찾으시나요?"
        />
      </Form>
    </MainBanner>
  );
};
