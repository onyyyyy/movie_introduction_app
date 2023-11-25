import { HashRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { routes } from "./routes";
import { Home } from "./pages/Home/Home";
import { Detail } from "./pages/Detail/Detail";
import { Search } from "./pages/Search/Search";
import { Genre } from "./pages/Genre/Genre";
import { TopRatedPage } from "./pages/TopRatedPage/TopRatedPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.Detail} element={<Detail />} />
        <Route path={routes.Search} element={<Search />} />
        <Route path={routes.Genre} element={<Genre />} />
        <Route path={routes.TopRatedPage} element={<TopRatedPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
