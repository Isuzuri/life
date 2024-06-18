import { Col, Row } from 'antd';
import { Button, Flex, Card } from "antd";

export default function Blog() {
    const posts = [
        {
            title: 'First Test',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque expedita ipsam omnis dolorum, reiciendis minus? Doloribus, odio laborum! Illum nesciunt unde iure asperiores a aliquam ab eos et recusandae.'
        }
    ]

    return <div>
        <Row>
            <Col span={20}>
                {posts.map((post) => {
                    return <Card title={post.title}>{post.description}</Card>
                })}
            </Col>
            <Col span={4}>
                <Flex justify='center'><Button type='primary' style={{width:'90%'}}>Create Post</Button></Flex>
            </Col>
        </Row>
    </div>
}