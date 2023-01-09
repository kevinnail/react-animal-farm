import React from 'react';
import './Main.css';
import { animals } from '../../data';
import Animal from '../Animal/Animal.js';
import background from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says}
          left={animal.left}
          top={animal.top}
        />
      ))}
    </main>
  );
}
