import { useState } from 'react';

export const useForm = (initialState = {}) => {
  console.log('Initias estate ', initialState);
  const [values, setValues] = useState(initialState);
  console.log('StateValue ', values);
  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
