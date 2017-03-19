import styled from 'styled-components';

const Article = styled.article`
  position: relative;
  width: 190px;
  margin: 0 10px;
  background: url(${(props) => props.artist.image}) center no-repeat;
  background-size: cover;
  
   > div {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    max-width: 145px;
    max-height: 145px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.7);
    transform: translate(-50%, -50%) scale(1.1);
    transition: all .3s;
  }
  
  p{
    font-family: 'WorkSans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: white;
    text-transform: uppercase;
  }
  
  &:before {
    content:'';
    padding-top:100%; /* vertical value as  100% equals width */
    display: block;
  }
  
   &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 1px;
    width: 100%;
    opacity: 0;
    background: #7c5e3b;
    transition: all .3s;
  }
  
  &:hover {
     > div {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
     }
     
     &:after {
       opacity: 1;
       transform: translateY(-20px);
     }
  }
`;

export default Article;
