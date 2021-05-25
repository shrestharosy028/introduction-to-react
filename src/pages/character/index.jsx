import React, { Component } from 'react';
import Card from '../../components/Card';

export default class Character extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  fetchCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`
    );
    const data = await response.json();
    this.setState({
      character: data,
      isLoading: false,
    });
  };

  render() {
    const { character, isLoading } = this.state;
    return (
      <div>
        <h2>Character</h2>
        {isLoading ? <div>Loading...</div> : <Card character={character} />}
      </div>
    );
  }
}
