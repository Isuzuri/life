import React from "react"
import { Menu } from 'antd';

export default function Nav() {
    const pageList = [
        {
            label: 'Blog',
            key: 'blog'
        },
        {
            label: 'Lists',
            key: 'lists'
        }
    ]

    return <div style={{marginBottom:'1rem'}}>
        <Menu mode="horizontal" items={pageList}/>
    </div>
}