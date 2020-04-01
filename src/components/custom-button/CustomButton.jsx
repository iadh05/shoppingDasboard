import React from 'react';

import { CustomButtonContainer } from './CustomButton.style';
import './custom-button.scss';

function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children} </CustomButtonContainer>;
}

export default CustomButton;
