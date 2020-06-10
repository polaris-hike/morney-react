import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
const Money = () => {
    return (
        <MyLayout>
            <TagsSection>
            </TagsSection>
            <NoteSection>
            </NoteSection>
            <CategorySection>
            </CategorySection>
            <NumberPadSection>

            </NumberPadSection>
        </MyLayout>
    );
};

export default Money;