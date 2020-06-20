import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../components/Hooks/useTags';

const Wrapper = styled.section`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 12px 16px;
  background-color: #fff;
  > ol {
    margin: 12px -12px;
      > li {
          display: inline-block;
          border-radius: 18px;
          background-color: #D9D9D9;
          padding: 3px 18px;
          font-size: 14px;
          margin: 8px 12px;
          &.selected {
            background-color: #f60;
          }
      }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
    value: number[],
    onChange:(selected:number[])=>void
};
const TagsSection: React.FC<Props> = (props) => {
    const {tags,addTag} = useTags();
    const selectedTagIds = props.value;
    const onSelectedTag = (tagId: number) => {
        if (selectedTagIds.indexOf(tagId) === -1) {
            props.onChange([...selectedTagIds, tagId]);
        } else {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        }
    };
    return (
        <Wrapper>
            <ol>
                {
                    tags.map((item, index) => (
                            <li className={selectedTagIds.indexOf(item.id) !== -1 ? 'selected' : ''} onClick={() => onSelectedTag(item.id)} key={index}>{item.name}</li>
                        )
                    )
                }
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    );
};

export default TagsSection;