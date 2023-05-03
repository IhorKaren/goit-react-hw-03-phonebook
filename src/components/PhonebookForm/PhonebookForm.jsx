import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {
  StyledLabel,
  StyledField,
  Error,
  StyledButton,
  StyledForm,
  StyledFormik,
} from './PhonebookFrom.styled';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required!'),
  number: Yup.string()
    .required('Number is required!')
    .min(7, 'Number must be at least 7 digits')
    .max(16, 'Number must not exceed 16 digits'),
});

const PhonebookForm = ({ addContact }) => {
  return (
    <StyledFormik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <div>
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledField type="text" id="name" name="name" />
            <Error name="name" component="div" />
          </div>
          <div>
            <StyledLabel htmlFor="number">Number:</StyledLabel>
            <StyledField type="tel" id="number" name="number" />
            <Error name="number" component="div" />
          </div>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      )}
    </StyledFormik>
  );
};

export default PhonebookForm;

PhonebookForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
