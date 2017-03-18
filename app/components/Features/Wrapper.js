import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  
  .slick-arrow {
    position: absolute;
    z-index: 20;
    height: 80vh;
    width: 50%;
    
    outline: none;
  }
  .slick-prev {
    top: 0;
    left: 0;
    text-align: left;
  }
  .slick-next {
    top: 0;
    right: 0;
    text-align: right;
  }
  .slick-list {
    position: relative;
    z-index: 10;
  }
  .slick-track {
    display: flex;
    width: 100%;
  }
`;

export default Wrapper;
