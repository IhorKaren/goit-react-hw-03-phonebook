import PropTypes from 'prop-types';
import {
  StyledFormik,
  StyledForm,
  StyledLabel,
  StyledField,
} from './Filter.styled';

const FilterForm = ({ label, onChange }) => {
  const initialValues = {
    filter: '',
  };

  return (
    <StyledFormik initialValues={initialValues}>
      <StyledForm>
        <StyledLabel htmlFor="filter">{label}</StyledLabel>
        <StyledField
          type="text"
          id="filter"
          name="filter"
          onChange={onChange}
          value={onChange.filter}
        />
      </StyledForm>
    </StyledFormik>
  );
};

export default FilterForm;

FilterForm.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
