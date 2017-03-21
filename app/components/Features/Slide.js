import styled from 'styled-components';

const Article = styled.article`
  position: relative;
  display: table;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  & > div {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    padding-bottom: 45px;
  }
`;

export default Article;
