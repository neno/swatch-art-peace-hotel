import styled from 'styled-components';

const MediaThumb = styled.div`
  position: relative;
  float: left;
  max-width: 102px;
  margin-right: 20px;
  margin-bottom: 10px;
  overflow: hidden;
  
  transition: all .2s ease-in-out;
  &:hover { transform: scale(1.2); }
  
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export default MediaThumb;
