import React from 'react'; 

import Flashcard from './Flashcard'; 

function FlashCards() {

    const flashcards = JSON.parse(localStorage.getItem('flashcards'));

    console.log(flashcards)
    
    return (
        <React.Fragment>
        <span>Review your saved notecards. Remember, practice makes perfect!</span>
        {flashcards.map((flashcard, index) =>{
           return (
            <Flashcard flashcard={flashcard} key={index} /> 
           ) 
        })}
        </React.Fragment>
    )
}

export default FlashCards; 