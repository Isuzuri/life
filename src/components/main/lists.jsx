import { Card, List } from 'antd';
import { useEffect, useState } from 'react';

export default function ListsPage() {
  const data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    },
  ];

  return (
    <List
      grid={{
        gutter: 16,
        column: 4
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>{item.title + ' TEST'}</Card>
        </List.Item>
      )}></List>
  );
}
