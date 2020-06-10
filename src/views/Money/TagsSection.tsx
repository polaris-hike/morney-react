import styled from 'styled-components';
import React, {useState} from 'react';

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

const TagsSection: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const onAddTag = () => {
        const tagName = window.prompt('新标签的名称为');
        if (tagName) {
            setTags([...tags, tagName]);
        }
    };
    const onSelectedTag = (tag: string) => {
        if (selectedTags.indexOf(tag) === -1) {
            setSelectedTags([...selectedTags, tag]);
        } else {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        }
    };
    return (
        <Wrapper>
            <ol>
                {
                    tags.map((item, index) => (
                            <li className={selectedTags.indexOf(item) !== -1 ? 'selected' : ''} onClick={() => onSelectedTag(item)} key={index}>{item}</li>
                        )
                    )
                }
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
};

export default TagsSection;