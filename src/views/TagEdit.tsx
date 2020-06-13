import React from 'react';
import {useTags} from './useTags';
import {useParams} from 'react-router-dom';

const TagEdit: React.FC = () => {
    const {tags} = useTags();
    const {id} = useParams();
    const tag = tags.filter((v)=>v.id === parseInt(id))[0];
    console.log(tag);
    return (
        <div>
            {tag.name}
        </div>
    );
};

export default TagEdit;