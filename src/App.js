import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      descriptionInput: '',
      attrCard1: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      nameInput: event.target.value,
      descriptionInput: event.target.value,
      attrCard1: event.target.value,
      attrCard2: event.target.value,
      attrCard3: event.target.value,
      trunfo: event.target.value,
    });
  }

  render() {
    const { nameInput, descriptionInput,
      attrCard1, attrCard2, attrCard3, trunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attrCard1 }
          cardAttr2={ attrCard2 }
          cardAttr3={ attrCard3 }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
        />
        <Card
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attrCard1 }
          cardAttr2={ attrCard2 }
          cardAttr3={ attrCard3 }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
