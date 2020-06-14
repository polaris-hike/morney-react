import {useState} from 'react';
import {createId} from '../lib/createId';

const defaultTags = [
    {
        id:createId(),
        name:'衣'
    },
    {
        id:createId(),
        name:'食'
    },
    {
        id:createId(),
        name:'住'
    },
    {
        id:createId(),
        name:'行'
    }
]

const useTags = ()=>{
    const [tags, setTags] = useState<{id:number,name:string}[]>(defaultTags);
    console.log(tags);
    const updateTag = (id:number,name:string)=>{
        const newTags = JSON.parse(JSON.stringify(tags));
        let result = -1;
        for(let i = 0;i < newTags.length;i++){
            if(newTags[i].id === id) {
                result = i;
                break
            }
        }
        newTags.splice(result,1,{id,name})
        setTags(newTags)
    };
    const deleteTag = (id:number)=> {
        const newTags = JSON.parse(JSON.stringify(tags));
        let result = -1;
        for(let i = 0;i < newTags.length;i++){
            if(newTags[i].id === id) {
                result = i;
                break
            }
        }
        newTags.splice(result,1,)
        setTags(newTags)
    }
    return {
        tags,
        setTags,
        updateTag,
        deleteTag,
    }
};
export {useTags}