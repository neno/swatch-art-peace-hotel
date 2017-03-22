/**
 *
 * Modal
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

class Description extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { children } = this.props;

    const Wrapper = styled.div`
      position: relative;
      overflow: hidden;
      margin-top: 50px;
      ${!this.state.isOpen ? 'height: 46px;' : ''}
      
      div,
      p {
        margin: 0 0 20px;
      }
    `;

    const Button = styled.button`
      margin-top: 10px;
      text-decoration: underline;
      
      &:hover {
        color: #7c5e3c;
      }
    `;

    return (
      <div>
        <Wrapper>
          { children }
        </Wrapper>
        <Button onClick={this.toggle}>
          { this.state.isOpen ? 'Less' : 'More' }
        </Button>
      </div>
    );
  }
}

export default Description;
