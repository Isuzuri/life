import { Table } from 'antd';
import { Tag } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const { Column, ColumnGroup } = Table;

export default function FullPage() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/full')
      .then((res) => res.json())
      .then((data) => setDataSource(data));
  });

  function fieldFilter(data, field) {
    return data.map((item) => ({
      text: item[field],
      value: item[field]
    }));
  }

  const columns = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      filters: fieldFilter(dataSource, 'type')
    },
    {
      title: '"Качество"',
      dataIndex: 'quality',
      key: 'quality',
      filters: fieldFilter(dataSource, 'quality')
    },
    {
      title: 'Ссылка',
      dataIndex: 'link',
      key: 'link'
    },
    {
      title: 'Теги',
      dataIndex: 'tags',
      key: 'tags',
      filters: fieldFilter(dataSource, 'tags')
    }
  ];

  return (
    <div>
      <Table dataSource={dataSource}>
        <Column title="Название" dataIndex="title" key="title"></Column>
        <Column title="Тип" dataIndex="type" key="type"></Column>
        <Column
          title='"Качество"'
          dataIndex="quality"
          key="quality"
          sorter={(a, b) => a.quality - b.quality}
          render={(quality) => {
            let color = ''
            let name = ''
            switch (quality) {
              case 3:
                color = 'red'
                name = 'super hot'
                break
              case 2:
                color = 'volcano'
                name =  'hot'
                break
              case 1:
                color = 'orange'
                name =  'immediate'
                break
            }
            return <Tag color={color} key='quality'>{name.toUpperCase()}</Tag>
          }}></Column>
        <Column title="Ссылка" dataIndex="link" key="link" render={(link) => {
          return <Link to={link} target='_blank'>{link}</Link>
        }}></Column>
        <Column
          title="Теги"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => {
                let color = '';
                switch (tag) {
                  case 'incest':
                    color = 'yellow';
                    break;
                  case 'ahegao':
                    color = 'green';
                    break;
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}></Column>
      </Table>
    </div>
  );
}
