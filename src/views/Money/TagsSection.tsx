import styled from 'styled-components';
import React from 'react';

const _TagsSection = styled.section`
  flex-grow: 1;
  padding: 0 16px;
  background-color: #fff;
  > ol {
    padding: 0 4px;
    margin: 12px -12px;
      > li {
          display: inline-block;
          border-radius: 18px;
          background-color: #D9D9D9;
          padding: 3px 18px;
          font-size: 14px;
          margin: 8px 12px;
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
    return (
        <_TagsSection>
            <ol>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ol>
            <button>新增标签</button>
        </_TagsSection>
    );
};

export default TagsSection;