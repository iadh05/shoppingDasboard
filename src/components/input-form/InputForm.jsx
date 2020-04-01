import React from 'react';

import {
  FormInputContainer,
  GroupContainer,
  LabelContainer
} from './InputForm.style';
import './input-form.scss';

function InputForm({ handleChange, label, ...otherProps }) {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label && (
        <LabelContainer className={`${otherProps.value.length && 'shrink'}`}>
          {label}
        </LabelContainer>
      )}
    </GroupContainer>
  );
}

export default InputForm;
