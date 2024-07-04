import { Table, Form, Input, Tag, Select, Radio, Button, Space } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const { Column } = Table;

export default function FullPage() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/full')
      .then((res) => res.json())
      .then((data) => setDataSource(data));
  });

  const tagOptions = [
    {
      value: 'Incest'
    },
    {
      value: 'Ahegao'
    },
    {
      value: 'Masturbation'
    },
    {
      value: 'Milf'
    },
    {
      value: 'Mind break'
    },
    {
      value: 'Mind control'
    },
    {
      value: 'Public sex'
    },
    {
      value: 'Toys'
    }
  ];
  const tagColor = (tag) => {
    switch (tag) {
      case 'Incest':
        return 'yellow';
      case 'Ahegao':
        return 'green';
      case 'Masturbation':
        return 'purple';
      case 'Milf':
        return 'volcano';
      case 'Mind break':
        return 'red';
      case 'Mind control':
        return 'magenta';
      case 'Public sex':
        return 'cyan';
      case 'Toys':
        return 'geekblue';
    }
  }

  const tagRender = (props) => {
    let { label, closable, onClose, color } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    color = tagColor(label)
    return (
      
      <Tag
        color={color}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4
        }}>
        {label.toUpperCase()}
      </Tag>
    );
  };

  return (
    <div>
      <Form
        layout="inline"
        style={{ flexWrap: 'nowrap', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <Form.Item name="title">
          <Input placeholder="Название" />
        </Form.Item>
        <Form.Item name="type" initialValue={'hentai'}>
          <Radio.Group>
            <Radio value={'hentai'}>Хентай</Radio>
            <Radio value={'doujinsi'}>Додзинси</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Radio.Group defaultValue={2}>
            <Radio value={3}>
              <Tag color="red">SUPER HOT</Tag>
            </Radio>
            <Radio value={2}>
              <Tag color="volcano">HOT</Tag>
            </Radio>
            <Radio value={1}>
              <Tag color="orange">IMMEDIATE</Tag>
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="link">
          <Input placeholder="Ссылка" />
        </Form.Item>
        <Form.Item name="tags" style={{ width: '20%' }}>
          <Select mode="multiple" tagRender={tagRender} options={tagOptions} maxTagCount={'responsive'}/>
        </Form.Item>
        <Button type="primary">Create</Button>
      </Form>

      <Table dataSource={dataSource}>
        <Column title="Название" dataIndex="title" key="title"></Column>
        <Column title="Тип" dataIndex="type" key="type"></Column>
        <Column
          title='"Качество"'
          dataIndex="quality"
          key="quality"
          sorter={(a, b) => a.quality - b.quality}
          render={(quality) => {
            let color = '';
            let name = '';
            switch (quality) {
              case 3:
                color = 'red';
                name = 'super hot';
                break;
              case 2:
                color = 'volcano';
                name = 'hot';
                break;
              case 1:
                color = 'orange';
                name = 'immediate';
                break;
            }
            return (
              <Tag color={color} key="quality">
                {name.toUpperCase()}
              </Tag>
            );
          }}></Column>
        <Column
          title="Ссылка"
          dataIndex="link"
          key="link"
          render={(link) => {
            return (
              <Link to={link} target="_blank">
                {link}
              </Link>
            );
          }}></Column>
        <Column
          title="Теги"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => {
                const color = tagColor(tag.charAt(0).toUpperCase() + tag.slice(1))
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
