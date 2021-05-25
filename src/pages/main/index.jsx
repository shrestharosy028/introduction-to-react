import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { routes } from '../../constants';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    this.setState({
      characters: data.results,
      isLoading: false,
    });
  };

  render() {
    const { characters, isLoading } = this.state;
    return (
      <div>
        <h3>Rick and Morty Characters</h3>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          characters.map((character) => (
            <Link
              to={`${routes.baseCharacter}/${character.id}`}
              key={character.id}
            >
              <Card character={character} />
            </Link>
          ))
        )}
      </div>
    );
  }
}
