import styled from 'styled-components';

const TagsSection = styled.section`
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

export default TagsSection