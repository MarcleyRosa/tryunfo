import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      descriptionInput: '',
      attrCard1: '0',
      attrCard2: '0',
      attrCard3: '0',
      trunfo: false,
      buttonDisabled: true,
      imageInput: '',
      rareCard: 'normal',
      getTrunfo: false,
      afterSubmit: [],
      filterForNames: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      const { nameInput, descriptionInput, attrCard1,
        attrCard2, attrCard3, trunfo, imageInput, rareCard } = this.state;
      const object = {
        nameInput,
        descriptionInput,
        attrCard1,
        attrCard2,
        attrCard3,
        trunfo,
        imageInput,
        rareCard };
      return ({
        afterSubmit: [...prevState.afterSubmit, object],
        nameInput: '',
        descriptionInput: '',
        imageInput: '',
        attrCard1: '0',
        attrCard2: '0',
        attrCard3: '0',
        rareCard: 'nomral',
        trunfo: false,
        getTrunfo: trunfo,
        buttonDisabled: true,
      });
    });
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    }, () => {
      let trueOrFalse = false;
      const limitDos3Atributos = 210;
      const limit1Atributo = 90;
      const { nameInput, descriptionInput, attrCard1,
        attrCard2, attrCard3, imageInput } = this.state;
      const card1 = Number(attrCard1);
      const card2 = Number(attrCard2);
      const card3 = Number(attrCard3);

      if (nameInput.length === 0
      || descriptionInput.length === 0
      || attrCard1.length === 0
      || attrCard2.length === 0
      || attrCard3.length === 0
      || imageInput.length === 0
      || (card1 + card2 + card3) > limitDos3Atributos
      || card1 > limit1Atributo
      || card2 > limit1Atributo
      || card3 > limit1Atributo
      || card1 < 0 || card2 < 0 || card3 < 0) trueOrFalse = true;
      this.setState({ buttonDisabled: trueOrFalse });
    });
  }

  handleRemove = (event) => {
    const { getTrunfo } = this.state;
    const cards = document.getElementById(event.target.id);
    // console.log(event.target.id);
    // event.target.remove();
    cards.remove();
    if (getTrunfo === true) {
      this.setState({ getTrunfo: false });
    }
  }

  render() {
    const { nameInput, descriptionInput,
      attrCard1, attrCard2, attrCard3, trunfo,
      buttonDisabled, imageInput, rareCard,
      getTrunfo, afterSubmit, filterForNames, filterRare, filterTrunfo } = this.state;

    console.log(getTrunfo);

    const filterName = filterRare === 'todas' ? afterSubmit
      .filter((elem) => elem.nameInput.includes(filterForNames)) : afterSubmit
      .filter((elem) => elem.nameInput.includes(filterForNames))
      .filter((e) => e.rareCard === filterRare);

    const filterCards = filterTrunfo ? filterName
      .filter((e) => e.trunfo === true) : filterName;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.handleSubmit }
          cardName={ nameInput }
          hasTrunfo={ getTrunfo }
          cardDescription={ descriptionInput }
          cardAttr1={ attrCard1 }
          cardAttr2={ attrCard2 }
          cardAttr3={ attrCard3 }
          cardRare={ rareCard }
          cardTrunfo={ trunfo }
          cardImage={ imageInput }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ buttonDisabled }
        />
        <Card
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attrCard1 }
          cardAttr2={ attrCard2 }
          cardAttr3={ attrCard3 }
          cardTrunfo={ trunfo }
          cardRare={ rareCard }
          cardImage={ imageInput }
          onInputChange={ this.handleChange }
        />
        <label htmlFor="ids">
          Filtrar
          <input
            onChange={ this.handleChange }
            name="filterForNames"
            data-testid="name-filter"
            type="text"
            disabled={ filterTrunfo }
          />
        </label>
        <select
          name="filterRare"
          onChange={ this.handleChange }
          data-testid="rare-filter"
          disabled={ filterTrunfo }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="ids">
          Super Trunfo
          <input
            onChange={ this.handleChange }
            name="filterTrunfo"
            data-testid="trunfo-filter"
            type="checkbox"
          />
        </label>
        { filterCards.map((card) => (
          <div id={ card.nameInput } key={ card.descriptionInput }>
            <Card
              cardName={ card.nameInput }
              cardDescription={ card.descriptionInput }
              cardAttr1={ card.attrCard1 }
              cardAttr2={ card.attrCard2 }
              cardAttr3={ card.attrCard3 }
              cardTrunfo={ card.trunfo }
              cardImage={ card.imageInput }
              cardRare={ card.rareCard }
              onInputChange={ this.handleChange }
            />
            <button
              id={ card.nameInput }
              type="button"
              data-testid="delete-button"
              onClick={ this.handleRemove }
            >
              Excluir
            </button>
          </div>))}
      </div>
    );
  }
}

export default App;
