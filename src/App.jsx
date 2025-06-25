import React from 'react'
import { useState } from 'react'
import './index.css'
import Flashcard from './components/Flashcard'
import acura from './images/acura.webp';
import audi from './images/audi.avif';
import dodge from './images/dodge.png';
import honda from './images/honda.webp';
import hyundai from './images/hyundai.png';
import lexus from './images/lexus.jpg';
import mazda from './images/mazda.png';
import mitsubishi from './images/mitsubishi.png';
import subaru from './images/subaru.avif';
import toyota from './images/toyota.jpg';

const App = () => {

  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState ('')
  
  const [index, setIndex] = useState(0);

  const handleForward = () => {
    setIndex(index + 1)
  }

  const handleBackward = () => {
    setIndex(index - 1)
  }

  const handleNext = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    // Prevent showing the same card twice in a row
    while (randomIndex === index && cards.length > 1) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }
    setIndex(randomIndex);
  };

  const [streak,setStreak] = useState(0)

  const cards = [
    {
      question: "What car brand is this logo?",
      answer: "Acura",
      image: acura
    },
    {
      question: "What car brand is this logo?",
      answer: "Audi",
      image: audi
    },
    {
      question: "What car brand is this logo?",
      answer: "Dodge",
      image: dodge
    },
    {
      question: "What car brand is this logo?",
      answer: "Honda",
      image: honda
    },
    {
      question: "What car brand is this logo?",
      answer: "Hyundai",
      image: hyundai
    },
    {
      question: "What car brand is this logo?",
      answer: "Lexus",
      image: lexus
    },
    {
      question: "What car brand is this logo?",
      answer: "Mazda",
      image: mazda
    },
    {
      question: "What car brand is this logo?",
      answer: "Mitsubishi",
      image: mitsubishi
    },
    {
      question: "What car brand is this logo?",
      answer: "Subaru",
      image: subaru
    },
    {
      question: "What car brand is this logo?",
      answer: "Toyota",
      image: toyota
    }
  ];

  const handleSubmit = () => {
    if (guess.trim().toLowerCase() === cards[index].answer.toLowerCase()) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
    setGuess('');
  };

  return(
    <div className='main'>
      <h1>Guess The Car Logo</h1>
      <h2>How good are you at recognizing car logos? Test all of your car knowledge here!</h2>
      <h2>Number of cards: {cards.length}</h2>
      <h2>Current Streak: {streak}, Longest Streak:</h2>

      <Flashcard card={cards[index]} />

      <h3>Guess The Answer Here</h3>

      <input
        id="guess-input"
        className="entryBox"
        value={guess}
        onChange={e => setGuess(e.target.value)}
      />

      <button className="submit" onClick={handleSubmit}>Submit Guess</button>

      {feedback && (
        <div className={`feedback ${feedback}`}>
          {feedback === 'correct' ? 'Correct!' : 'Incorrect, try again.'}
        </div>
      )}

      <div className='btn-container'>
        <button
          className="navBtn"
          onClick={() => {
            setIndex(index - 1);
            setGuess('');
            setFeedback('');
          }}
          disabled={index === 0}
        >←</button>
        <button
          className="navBtn"
          onClick={() => {
            setIndex(index + 1);
            setGuess('');
            setFeedback('');
          }}
          disabled={index === cards.length - 1}
        >→</button>
      </div>

      <button className='shuffle-btn' onClick={handleNext}>Shuffle</button>

      
    </div>
  )
}

export default App