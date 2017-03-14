import styled from 'styled-components';

const navWidth = '300px';

const Nav = styled.nav`
    position: absolute;
    z-index: 9000;
    width: ${navWidth};
    height: 100%;
    background: rgba(255,255,255, 0.8);
    transform: translateX(${(props) => (props.active ? '0' : `-${navWidth}`)});
    transition: transform .4s;
`;

export default Nav;
