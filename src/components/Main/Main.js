import React from 'react';
import './Main.css';
import { animals } from '../../data';
import Animal from '../Animal/Animal.js';
import background from '../../background.png';

export default function Main() {
  return <main className="Main" style={{ backgroundImage: `url(${background})` }}></main>;
}
