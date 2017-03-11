/**
*
* Thumb
*
*/

import React from 'react';
import Modal from 'react-modal';
import Image from '../Image';
// import styled from 'styled-components';


class Thumb extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>
          <Image src={'http://placehold.it/400X400'} alt={'placeholder image'} />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          parentSelector={() => document.body}
          contentLabel="Modal"
        >
          <Image src={'http://placehold.it/1400X1400'} alt={'placeholder image'} />
        </Modal>
      </div>
    );
  }
}

Thumb.propTypes = {

};

export default Thumb;
