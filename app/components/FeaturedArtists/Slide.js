import styled from 'styled-components';

const Article = styled.article`
  position: relative;
  overflow: hidden;
  margin: 0 10px;
  width: 190px;
  height: 190px;
  background: url(${(props) => props.artist.image}) center no-repeat;
  background-size: cover;
`;

export default Article;
