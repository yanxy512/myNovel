/*
 * @Date: 2024-09-01 19:10:53
 * @LastEditors: yanxy512 1165705313@qq.com
 * @LastEditTime: 2024-09-01 19:31:32
 * @FilePath: \myNovel\src\pages\Home\InspirationList\index.jsx
 */
import React from "react";
import { List, Tag } from "antd";

export default function InspirationList(props) {
  const { inspirations, selectedTags, searchText, tagsData } = props;

  // 过滤灵感数据
  const filteredInspirations = inspirations.filter(
    (inspiration) =>
      (selectedTags.length === 0 ||
        selectedTags.every((tag) => inspiration.tags.includes(tag))) &&
      (searchText === "" || inspiration.content.includes(searchText))
  );

  // 根据标签获取颜色
  const getTagColor = (tag) => {
    for (const type in tagsData) {
      if (tagsData[type].tags.includes(tag)) {
        return tagsData[type].color;
      }
    }
    return "default";
  };

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={filteredInspirations}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={
              item.imageUrl ? (
                <img width={150} alt="灵感图片" src={item.imageUrl} />
              ) : null
            }
            style={{ minHeight: "120px" }}
          >
            <List.Item.Meta
              title={<a href="#">{item.content}</a>}
              description={item.createdAt}
            />
            {item.tags.map((tag) => (
              <Tag key={tag} color={getTagColor(tag)}>
                {tag}
              </Tag>
            ))}
          </List.Item>
        )}
      />
    </div>
  );
}
