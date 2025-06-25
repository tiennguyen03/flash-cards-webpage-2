import React from 'react'
import { useState } from 'react'
import '../index.css'

const Flashcard = ({ card }) => {

    const [flipped, setFlipped] = useState(false);

    // Explicitly check if card is undefined or null
    if (card === undefined || card === null){
        return null;
    }

    return (
        <div
            className={`flashcard${flipped ? ' flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}
            style={{ cursor: 'pointer' }}
        >
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <img src={card.image} alt="Car logo" style={{ width: '200px' }} />
                    <div>{card.question}</div>
                </div>
                <div className="flashcard-back">
                    {card.answer}
                </div>
            </div>
        </div>
    );
}

export default Flashcard