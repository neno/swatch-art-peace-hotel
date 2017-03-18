import styled from 'styled-components';

const Article = styled.article`
  position: relative;
  display: table;
  width: 100%;
  height: 90vh;
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
