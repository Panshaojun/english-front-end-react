import {FC} from 'react';
import { Popover } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';

const ChineseTranslation:FC<{explain:string}>=({explain})=>{
    const content=(
        <div>{explain}</div>
    )
    return (
        <Popover content={content} title="单词释义">
            <TranslationOutlined style={{ fontSize: '20px', color: '#08c' }} />
        </Popover>
    )
}

export default ChineseTranslation;