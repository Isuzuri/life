import { Table } from 'antd';

export default function FullPage() {
  const generatedObjects = [];
  for (let i = 1; i <= 10; i++) {
    generatedObjects.push({
      key: i,
      title: `Название ${i}`,
      type: `Тип ${i}`,
      source: `Источник ${i}`,
      link: `Ссылка ${i}`,
      tags: `Тег ${i}`
    });
  }
  const dataSource = generatedObjects;

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
