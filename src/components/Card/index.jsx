import React from 'react';

export default function Card(props) {
  const { name, image, species } = props.character;

  return (
    <div>
      <li>
        <b>{name}</b>({species})
      </li>
      <img src={image} alt='' />
    </div>
  );
}
