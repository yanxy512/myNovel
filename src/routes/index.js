/*
 * @Date: 2024-08-19 22:09:53
 * @LastEditors: yanxy512 1165705313@qq.com
 * @LastEditTime: 2024-09-01 20:24:58
 * @FilePath: \myNovel\src\routes\index.js
 */
// src/routes/index.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutComponents from "../pages/LayoutComponents/LayoutComponents";
import Home from "../pages/Home/Home";
import TagCreation from "../pages/TagCreation/TagCreation";
import InspirationCreation from "../pages/InspirationCreation/InspirationCreation";
import Test from "../pages/Test";

const AppRoutes = () => (
  <Router>
    <LayoutComponents>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tag-creation" element={<TagCreation />} />
        <Route path="/inspiration-creation" element={<InspirationCreation />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </LayoutComponents>
  </Router>
);

export default AppRoutes;
