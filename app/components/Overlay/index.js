/**
*
* Modal
*
*/

import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import Button from './Button';


class Overlay extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    trigger: PropTypes.node.isRequired,
    handleOpen: PropTypes.func,
    handleClose: PropTypes.func,
    buttonTitle: PropTypes.string,
    isOpen: PropTypes.bool,
    children: PropTypes.any,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modalIsOpen: false,
  //   };
  // }

  openModal = () => {
    // this.setState({ modalIsOpen: true });
    if (this.props.handleOpen) {
      this.props.handleOpen();
    }
  };

  closeModal = () => {
    // this.setState({ modalIsOpen: false });
    if (this.props.handleClose) {
      this.props.handleClose();
    }
  };

  render() {
    const { trigger, children, buttonTitle, isOpen } = this.props;
    return (
      <div>
        <Button onClick={this.openModal} title={buttonTitle}>
          { trigger }
        </Button>
        <Modal
          isOpen={isOpen}
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
