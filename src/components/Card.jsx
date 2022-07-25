import React, { Component } from 'react';

class Card extends Component {
  pullRender(getPosps) {
    if (getPosps === true) {
      return 'Super Trunfo';
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section>
        <div data-testid="name-card">
          { cardName }
        </div>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <div data-testid="description-card">{ cardDescription }</div>
        <div data-testid="attr1-card">{ cardAttr1 }</div>
        <div data-testid="attr2-card">{ cardAttr2 }</div>
        <div data-testid="attr3-card">{ cardAttr3 }</div>
        <div data-testid="rare-card">{ cardRare }</div>
        { cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div> : ''}
      </section>
    );
  }
}

export default Card;