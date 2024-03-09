import { Route, Routes } from "react-router-dom";
import { Catalogue } from "../pages/Catalogue";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

export const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/produtos/:department`} element={<Catalogue />} />
      <Route path={`/contato`} element={<Contact />} />
    </Routes>
  );
};
