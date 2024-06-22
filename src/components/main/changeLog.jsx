import React, { useState } from 'react';
import { Button, Flex, Card, Modal, Col, Row, Input, Form, Typography } from 'antd';
const { Text } = Typography;

export default function Blog() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState();
  const [posts, setPosts] = useState([]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (values) => {
    setPosts([
      {
        title: values.title,
        description: values.description,
        createTime: new Date(Date.now()).toLocaleString()
      },
      ...posts
    ]);
    setOpen(false);
  };

  const { TextArea } = Input;

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
            onFinish={(values) => handleOk(values)}>
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
