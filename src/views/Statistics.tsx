import Layout from '../components/Layout';
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import styled from 'styled-components';
import useRecords from 'components/Hooks/useRecords';
import {useTags} from 'components/Hooks/useTags';
import dayjs from 'dayjs';

const CategoryWrapper = styled.div`
  background:white;
`;


const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

type RecordItem = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    output: string
    createdAt: string // ISO 8601
}
function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const selectedRecords = records.filter(r=>r.category === category);
    const hash:{[K:string]: RecordItem[]} = {};
    selectedRecords.forEach((r)=>{
        const key = dayjs(r.createdAt).format('YYYY年MM月DD日')
        if(!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r);
    });
    const array = Object.entries(hash).sort((a,b)=>{
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    })
    const {getName} = useTags();
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {array.map(([date, records]) => <div>
                <Header>
                    {date}
                </Header>
                <div>
                    {records.map(r => {
                        return <Item>
                            <div className="tags oneLine">
                                {r.tagIds
                                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                }
                            </div>
                            {r.note && <div className="note">
                                {r.note}
                            </div>}
                            <div className="amount">
                                ￥{r.output}
                            </div>
                        </Item>;
                    })}
                </div>
            </div>)}
        </Layout>
    );
}


export default Statistics;