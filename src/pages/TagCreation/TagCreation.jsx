/*
 * @Date: 2024-08-19 22:19:36
 * @LastEditors: yanxy512 1165705313@qq.com
 * @LastEditTime: 2024-09-04 22:19:05
 * @FilePath: \myNovel\src\pages\TagCreation\TagCreation.jsx
 */
// src/pages/TagCreation/TagCreation.jsx
import React, { useState } from "react";
import { Typography, Space, Tag } from "antd";
import { tagArray } from "../../../mock";
import ManageTags from "./ManageTags";

const { Title } = Typography;

export default function TagCreation() {
  const [tagsData, setTagsData] = useState(tagArray);

  const changeData = (index, newData) => {
    setTagsData((prevTagArray) => ({
      ...prevTagArray,
      [index]: {
        ...prevTagArray[index],
        tags: newData,
      },
    }));
  };

  return (
    <div>
      {Object.keys(tagsData).map((tagType) => (
        <div key={tagType} style={{ marginBottom: "10px" }}>
          <Title
            level={5}
            editable
            style={{
              margin: 0,
            }}
          >
            {tagType}
          </Title>
          <Space size={[0, 8]} wrap>
            <ManageTags
              data={tagsData[tagType]}
              index={tagType}
              changeData={changeData}
            />
          </Space>
        </div>
      ))}
    </div>
  );
}
