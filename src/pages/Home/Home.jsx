/*
 * @Date: 2024-08-19 22:19:16
 * @LastEditors: yanxy512 1165705313@qq.com
 * @LastEditTime: 2024-09-01 19:19:47
 * @FilePath: \myNovel\src\pages\Home\Home.jsx
 */
import React, { useState } from "react";
import { Input, Tag, List } from "antd";
import "./Home.less";
import { tagArray, inspirationsArray } from "../../../mock";
import TagGroup from "./TagGroup";
import InspirationList from "./InspirationList";

// 标签数据，分组并指定颜色
const tagsData = tagArray;
// 示例灵感数据
const inspirations = inspirationsArray;

function Home() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchText, setSearchText] = useState("");

  // 搜索框的输入变化
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // 处理搜索操作
  const handleSearch = () => {
    console.log("搜索内容:", searchText, "选择的标签:", selectedTags);
  };

  return (
    <div>
      <div style={{ margin: "20px 0" }}>
        <Input.Search
          placeholder="搜索灵感..."
          enterButton="搜索"
          size="large"
          onSearch={handleSearch}
          onChange={handleSearchInputChange}
        />
      </div>
      <TagGroup
        tagsData={tagsData}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      ></TagGroup>
      <InspirationList
        tagsData={tagsData}
        inspirations={inspirations}
        selectedTags={selectedTags}
        searchText={searchText}
      ></InspirationList>
    </div>
  );
}

export default Home;
