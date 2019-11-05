import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, handleChange, search }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" onChange={handleChange} value={search} />
      <button>Go!</button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

export default Form;
