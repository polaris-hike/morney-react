import Layout from '../components/Layout';
import React from 'react';
import {useTags} from './useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button'

const TagList = styled.ol`
  font-size: 16px; 
  background:white;
   li{
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`

function Tags() {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <Link key={tag.id} to={'/tags/'+tag.id}>
                        <li>
                            <span className="oneLine">{tag.name}</span>
                            <Icon name="right"/>
                        </li>
                    </Link>
                )}
            </TagList>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;