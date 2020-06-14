import React from 'react';
import {useTags} from './useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import {Input} from 'components/Input'
import {Center} from 'components/Center'
import {Space} from 'components/Space'
import styled from 'styled-components';

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
  .icon {
    transform: rotate(180deg);
  }
`;
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;

const TagEdit: React.FC = (props) => {
    const {tags,updateTag,deleteTag} = useTags();
    const {id} = useParams();
    const tag = tags.filter((v)=>v.id === parseInt(id))[0];
    const xxx = (id:number)=>{
        deleteTag(id)
    }
    return (
        <div>
            <Layout>
                <Topbar>
                    <Icon name="right"/>
                    <span>编辑标签</span>
                    <span/>
                </Topbar>
                <InputWrapper>
                    <Input label="标签名" type="text" onChange={(e)=> {updateTag(tag.id,e.target.value)}} placeholder="标签名" value={tag.name}/>
                </InputWrapper>
                <Center>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Button onClick={()=>xxx(tag.id)}>删除标签</Button>
                </Center>
            </Layout>
        </div>
    );
};

export default TagEdit;