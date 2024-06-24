import { Table } from 'antd';
import { useEffect, useState } from 'react';

export default function FullPage() {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/table')
      .then(res => res.json())
      .then(data => setDataSource(data.dataForTable))
  })

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
      title: 'Источник',
      dataIndex: 'source',
      key: 'source',
      filters: fieldFilter(dataSource, 'source')
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
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
}
