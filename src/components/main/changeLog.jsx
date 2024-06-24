import React, { useEffect, useState } from 'react';
import { Button, Card, Modal, Input, Form, Typography } from 'antd';
const { Text } = Typography;

export default function Blog() {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/logs')
      .then((res) => res.json())
      .then((data) => setPosts(data.dataForLogs));
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (values) => {
    fetch('http://localhost:3001/logs_push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        title: values.title,
        description: values.description
      })
    })
      .then((res) => res.json())
      .then((data) => setPosts([data, ...posts]));
    setOpen(false);
  };

  return (
    <div>
      <Button type="primary" style={{ width: '100%' }} onClick={showModal}>
        Create Log
      </Button>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <Modal
        title="New Log"
        open={open}
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        okText={'Create'}
        destroyOnClose
        okButtonProps={{
          autoFocus: true,
          htmlType: 'submit'
        }}
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="formInModal"
            clearOnDestroy
            onFinish={(values) => handleOk(values)}
            method='POST'>
            {dom}
          </Form>
        )}>
        <Form.Item
          name="title"
          label="Заголовок"
          rules={[{ required: true, message: 'Type something, baka' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: 'Type something, baka' }]}>
          <TextArea placeholder="Description" allowClear autoSize={{ minRows: 5 }} />
        </Form.Item>
      </Modal>
      <div>
        {posts.map((post, index) => {
          return (
            <Card title={post.title} key={index} style={{ marginBottom: '1rem' }}>
              <Text>{post.description}</Text> <br />
              <Text type="secondary">{post.createTime}</Text>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
