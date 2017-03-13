/**
*
* Close
*
*/

import React, { PropTypes } from 'react';
import Button from './Button';


const Close = ({ handleClose }) => (
  <Button onClick={handleClose} title="Close">x</Button>
);

Close.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Close;
