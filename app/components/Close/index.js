/**
*
* Close
*
*/

import React, { PropTypes } from 'react';
import Button from './Button';
import close from '../../img/close.svg';


const Close = ({ handleClose }) => (
  <Button onClick={handleClose} title="Close">
    <img src={close} alt="Close icon" />
  </Button>
);

Close.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Close;
