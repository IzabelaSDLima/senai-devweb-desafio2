import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import TelaCadastro from "./pages/TelaCadastro";
import TelaLista from "./pages/TelaLista";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<TelaCadastro />} path="/cadastro" />
        <Route element={<TelaLista />} path="/lista" />
        <Route element={<TelaLista />} path="/cadastro" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
