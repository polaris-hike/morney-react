import React from 'react';
import {useTags} from './useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';

const TagEdit: React.FC = () => {
    const {tags} = useTags();
    const {id} = useParams();
    const tag = tags.filter((v)=>v.id === parseInt(id))[0];
    console.log(tag);
    return (
        <div>
            <Layout>
                <header>
                    <Icon name="left"></Icon>
                    <span>编辑标签</span>
                </header>
                <div>
                    <label>
                        <span>标签名</span>
                        <input
                            type="text"
                            placeholder="标签名"
                        />
                    </label>
                </div>
                <div>
                    <Button>删除标签</Button>
                </div>
                {tag.name}
            </Layout>
        </div>
    );
};

export default TagEdit;