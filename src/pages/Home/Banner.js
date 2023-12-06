import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const MainBanner = styled.div`
  height: 80vh;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  position: relative;
  @media screen and (max-width: 450px) {
    height: 60vh;
  }
`;

const params = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  modules: [Autoplay, Pagination, Navigation],
  breakpoints: {
    1024: {
      spaceBetween: 20,
    },
    640: {
      spaceBetween: 20,
    },
    320: {
      spaceBetween: 10,
    },
  },
};
// const BgBlack = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgb(0, 0, 0);
//   background: linear-gradient(
//     0deg,
//     rgba(0, 0, 0, 1) 18%,
//     rgba(255, 255, 255, 0.5080882694874824) 100%
//   );
// `;

// const Form = styled.form`
//   width: 60%;
//   height: 60px;
//   position: absolute;
//   top: 60%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border: 2px solid #333;
//   padding: 0 20px;
//   border-radius: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: white;
//   @media screen and (max-width: 450px) {
//     width: 90%;
//   }
// `;
// const Input = styled.input`
//   all: unset;
//   width: 100%;
//   height: 100%;
//   color: #333;
// `;

export const Banner = ({ bannerData }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onSubmit",
  // });

  // const navigate = useNavigate();

  // const SearchHandler = (data) => {
  //   const { search: keyword } = data;
  //   navigate(routes.search, { state: { key: keyword } });
  // };
  return (
    <Swiper {...params}>
      {bannerData
        .map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <MainBanner $bgUrl={data.backdrop_path} />
            </Link>
          </SwiperSlide>
        ))
        .slice(0, 10)}
    </Swiper>
    // <MainBanner $bgUrl={bannerData.backdrop_path}>
    //   <BgBlack />
    //   <Form onSubmit={handleSubmit(SearchHandler)}>
    //     <Input
    //       {...register("search", {
    //         required: "검색어를 입력해주세요!",
    //         minLength: {
    //           value: 1,
    //           message: "한 글자 이상 입력해주세요!",
    //         },
    //       })}
    //       type="text"
    //       placeholder="어떤 영화를 찾으시나요?"
    //     />
    //     <ErrorMessage message={errors?.password?.message} />
    //   </Form>
    // </MainBanner>
  );
};
