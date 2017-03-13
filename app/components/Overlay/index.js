/**
*
* Modal
*
*/

import React, { PropTypes } from 'react';
import Modal from 'react-modal';


class Overlay extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    trigger: PropTypes.node.isRequired,
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { trigger, children } = this.props;
    return (
      <div>
        <button onClick={this.openModal}>
          { trigger }
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          parentSelector={() => document.body}
          contentLabel="Modal"
        >
          { children }
        </Modal>
      </div>
    );
  }
}

export default Overlay;
