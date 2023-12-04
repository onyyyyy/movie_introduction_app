import { HashRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { TopRatedPage } from "./pages/topRatedPage/TopRatedPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Trend } from "./pages/trend/Trend";
import { List } from "./pages/list/List";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.trend} element={<Trend />} />
        <Route path={routes.list} element={<List />} />
        <Route path={routes.topRatedPage} element={<TopRatedPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
