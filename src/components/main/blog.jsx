import React, {useState} from "react";
import { Button, Flex, Card, Modal, Col, Row, Input, TextArea } from "antd";

export default function Blog() {
    const [open, setOpen] = useState(false)

    const showModal = () => {
        setOpen(true)
    }

    const handleOk = () => {
        setOpen(false)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const posts = [
        {
            title: 'First Test',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque expedita ipsam omnis dolorum, reiciendis minus? Doloribus, odio laborum! Illum nesciunt unde iure asperiores a aliquam ab eos et recusandae.'
        }
    ]

    const { TextArea } = Input;

    return <div>
        <Row>
            <Col span={20}>
                {posts.map((post, index) => {
                    return <Card title={post.title} key={index}>{post.description}</Card>
                })}
            </Col>
            <Col span={4}>
                <Flex justify='center'>
                    <Button type='primary' style={{width:'90%'}} onClick={showModal}>Create Post</Button>
                    <Modal 
                        title='New Post' 
                        open={open}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText={'Send'}
                    >
                        <Flex vertical gap='middle'>
                            <Input placeholder="Title"></Input>
                            <TextArea placeholder="Description" allowClear autoSize={{minRows: 5}}></TextArea>
                        </Flex>
                    </Modal>
                </Flex>
            </Col>
        </Row>
    </div>
}