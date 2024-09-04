/*
 * @Date: 2024-08-27 22:23:36
 * @LastEditors: yanxy512 1165705313@qq.com
 * @LastEditTime: 2024-09-01 17:54:37
 * @FilePath: \myNovel\src\App.jsx
 */
import React from "react";
import AppRoutes from "./routes";
import css from "./App.less";

function App() {
  return (
    <div className={css.app}>
      <AppRoutes />
    </div>
  );
}

export default App;
