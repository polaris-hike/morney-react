import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';
import useRecords from '../components/Hooks/useRecords';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
      background:#c4c4c4;
`
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    output: '0'
};

type Category = '-' | '+';
const Money = () => {
    const [obj, setObj] = useState(defaultFormData);
    const {addRecord} = useRecords();
    const onChange = (v: Partial<typeof obj>) => {
        setObj({
            ...obj,
            ...v
        });
    };
    const submit = () => {
        addRecord(obj);
        alert('保存成功');
        setObj(defaultFormData);
    };
    return (
        <MyLayout>
            <TagsSection value={obj.tagIds} onChange={(tagIds) => onChange({tagIds})}>
            </TagsSection>
            <NoteSection value={obj.note} onChange={(note) => onChange({note})}>
            </NoteSection>
            <CategoryWrapper>
                <CategorySection value={obj.category} onChange={(category) => onChange({category})}>
                </CategorySection>
            </CategoryWrapper>
            <NumberPadSection value={obj.output} onChange={(output) => onChange({output})} onOK={() => submit()}>
            </NumberPadSection>
        </MyLayout>
    );
};

export default Money;