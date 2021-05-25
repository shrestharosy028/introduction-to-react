import { Component } from 'react';

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: this.emotions[0],
    };
  }

  emotions = [
    {
      id: 1,
      emotion: 'happy',
      emoji: '😃',
    },
    {
      id: 2,
      emotion: 'sad',
      emoji: '😢',
    },
    {
      id: 3,
      emotion: 'dizzy',
      emoji: '😵‍💫',
    },
    {
      id: 4,
      emotion: 'shitty',
      emoji: '💩',
    },
  ];

  handleMoodChange = (emotion) => {
    console.log(emotion);

    const found = this.emotions.find((item) => item.emotion === emotion);
    this.setState({
      mood: found,
    });
  };

  render() {
    return (
      <>
        <h1>Available Emotions</h1>
        {this.emotions.map((item) => (
          <div
            onClick={() => this.handleMoodChange(item.emotion)}
            style={{ margin: '10px', cursor: 'pointer' }}
            key={item.id}
          >
            <span>{item.emotion}</span>
            <span>{item.emoji}</span>
          </div>
        ))}
        <h1>What are you feeling?</h1>
        {this.state.mood.emotion}
        {this.state.mood.emoji}
      </>
    );
  }
}
