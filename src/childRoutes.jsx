import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import NoMatching from "./containers/noMatching/NoMatching";

const childRoutes = 
<Routes>
  <Route index element={<Home />} />
  <Route path="home" element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="expenses" element={"expenses!"} />
  <Route path="*" element={<NoMatching />} />
</Routes>
;

export default childRoutes;