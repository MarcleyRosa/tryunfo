import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, hasTrunfo, onSaveButtonClick } = this.props;

    return (
      <form onSubmit={ onSaveButtonClick }>
        <label htmlFor="name-input">
          Nome
          <input
            onChange={ onInputChange }
            value={ cardName }
            data-testid="name-input"
            type="text"
            name="nameInput"
          />
        </label>
        Descrição da Carta
        <textarea
          onChange={ onInputChange }
          value={ cardDescription }
          data-testid="description-input"
          cols="30"
          rows="10"
          name="descriptionInput"
        >
          text
        </textarea>
        <label htmlFor="attrCard1">
          1° Atributo
          <input
            onChange={ onInputChange }
            value={ cardAttr1 }
            data-testid="attr1-input"
            type="number"
            name="attrCard1"
            id="attrCard1"
          />
        </label>
        2° Atributo
        <label htmlFor="attr2-input">
          <input
            onChange={ onInputChange }
            value={ cardAttr2 }
            data-testid="attr2-input"
            type="number"
            name="attrCard2"
          />
        </label>
        3° Atributo
        <label htmlFor="attr3-input">
          <input
            onChange={ onInputChange }
            value={ cardAttr3 }
            data-testid="attr3-input"
            type="number"
            name="attrCard3"
          />
        </label>
        Imagem
        <label htmlFor="image-input">
          <input
            onChange={ onInputChange }
            value={ cardImage }
            data-testid="image-input"
            type="text"
            name="imageInput"
          />
        </label>
        Tipo
        <label htmlFor="rare-input">
          <select
            onChange={ onInputChange }
            value={ cardRare }
            data-testid="rare-input"
            name="rareCard"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="trunfo-input">
              Super Trunfo
              <input
                onChange={ onInputChange }
                checked={ cardTrunfo }
                data-testid="trunfo-input"
                type="checkbox"
                name="trunfo"
              />
            </label>) }
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
