import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
type Category = '-' | '+';
const Money = () => {
    const [obj, setObj] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        output: '0'
    });
    const onChange = (v: Partial<typeof obj>) => {
        setObj({
            ...obj,
            ...v
        });
    };
    return (
        <MyLayout>
            <TagsSection selected={obj.tags} onChange={(tags) => onChange({tags})}>
            </TagsSection>
            <NoteSection value={obj.note} onChange={(note) => onChange({note})}>
            </NoteSection>
            <CategorySection value={obj.category} onChange={(category) => onChange({category })}>
            </CategorySection>
            <NumberPadSection value={obj.output} onChange={(output) => onChange({output})} onOK={() => alert(obj)}>
            </NumberPadSection>
        </MyLayout>
    );
};

export default Money;