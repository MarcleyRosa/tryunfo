import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    //   hasTrunfo, ( ain da não usado)
    return (
      <form>
        <label htmlFor="name-input">
          <input
            onChange={ onInputChange }
            value={ cardName }
            data-testid="name-input"
            type="text"
          />
        </label>
        <textarea
          onChange={ onInputChange }
          value={ cardDescription }
          data-testid="description-input"
          cols="30"
          rows="10"
        >
          text
        </textarea>
        <label htmlFor="attr1-input">
          <input
            onChange={ onInputChange }
            value={ cardAttr1 }
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            onChange={ onInputChange }
            value={ cardAttr2 }
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            onChange={ onInputChange }
            value={ cardAttr3 }
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image-input">
          <input
            onChange={ onInputChange }
            value={ cardImage }
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare-input">
          <select
            onChange={ onInputChange }
            value={ cardRare }
            data-testid="rare-input"
            name=""
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            onChange={ onInputChange }
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>
        <button
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
