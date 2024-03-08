import { Route, Routes } from "react-router-dom";
import { Catalogue } from "../pages/Catalogue";
import { Home } from "../pages/Home";

export const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/produtos/:department`} element={<Catalogue />} />
    </Routes>
  );
};
