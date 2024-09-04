/*
 * @Date: 2024-09-01 18:57:58
 * @LastEditors: yanxy512 1165705313@qq.com
 * @LastEditTime: 2024-09-01 19:31:14
 * @FilePath: \myNovel\src\pages\Home\TagGroup\index.jsx
 */
import React from "react";
import { Typography, Space, Tag, Collapse } from "antd";

const { CheckableTag } = Tag;
const { Title } = Typography;

export default function TagGroup(props) {
  const { tagsData, selectedTags, setSelectedTags } = props;

  const items = [
    {
      key: "1",
      label: "",
      children: (
        <>
          {Object.keys(tagsData).map((tagType) => (
            <div key={tagType} style={{ marginBottom: "10px" }}>
              <Title level={5}>{tagType}</Title>
              <Space size={[0, 8]} wrap>
                {tagsData[tagType].tags.map((tag) => (
                  <CheckableTag
                    key={tag}
                    style={{
                      backgroundColor: selectedTags.includes(tag)
                        ? tagsData[tagType].color
                        : "#f5f5f5",
                    }}
                    checked={selectedTags.includes(tag)}
                    onChange={(checked) => handleTagChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </Space>
            </div>
          ))}
        </>
      ),
    },
  ];

  // 处理标签选择
  const handleTagChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div>
      <Collapse bordered={false} items={items} />
    </div>
  );
}
